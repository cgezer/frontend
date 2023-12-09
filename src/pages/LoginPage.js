import React, { useState } from "react";
import Input from "../components/Input";
import { withTranslation } from "react-i18next";
import { login } from "../api/apiCalls";
import ButtonWithProgress from "../components/ButtonWithProgress";
import { withApiProgress } from "../shared/ApiProgress";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../shared/AuthenticationContext";

const LoginPage = ({ t, pendingApiCall }) => {
  const [state, setState] = useState({
    username: null,
    password: null,
    error: null,
    pendingApiCall: false,
  });

  const { username, password, error } = state;
  const { onLoginSuccess } = useAuth();
  const navigate = useNavigate();

  const onChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setState({
      ...state,
      [name]: value,
      error: null,
    });
  };

  const onClickLogin = async (event) => {
    event.preventDefault();
    const creds = {
      username,
      password,
    };
    setState({
      ...state,
      error: null,
    });
    try {
      const response = await login(creds);
      navigate("/"); // Ana sayfaya yönlendirme

      const authState = {
        ...response.data,
        password
      };
      onLoginSuccess(authState);
    } catch (apiError) {
      setState({
        ...state,
        // error: apiError.response.data.message,
      });
    }
  };

  const buttonEnabled = username && password;

  return (
    <div className="container">
      <form>
        <h1 className="text-center">{t("Login")}</h1>
        <Input label={t("Username")} name="username" onChange={onChange} />
        <Input
          label={t("Password")}
          name="password"
          type="password"
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>} <br />
        <div className="text-center">
          <ButtonWithProgress
            onClick={onClickLogin}
            disabled={!buttonEnabled || pendingApiCall}
            pendingApiCall={pendingApiCall}
            text={t("Login")}
          />
        </div>
      </form>
    </div>
  );
};

export default withTranslation()(withApiProgress(LoginPage, "/api/1.0/auth"));