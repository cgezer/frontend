import React, { useState } from "react";
import Input from "../components/Input";
import { withTranslation } from "react-i18next";
import { login } from "../api/apiCalls";
import ButtonWithProgress from "../components/ButtonWithProgress";
import { withApiProgress } from "../shared/ApiProgress";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const [state, setState] = useState({
    username: null,
    password: null,
    error: null,
    pendingApiCall: false,
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
      error: null,
    }));
  };

  const navigate = useNavigate();
  const onClickLogin = async (event) => {
    event.preventDefault();
    const { username, password } = state;
    const {onLoginSuccess} = props;
    const creds = {
      username,
      password,
    };
    setState((prevState) => ({
      ...prevState,
      error: null,
    }));
    try {
      await login(creds);
      navigate("/");
      onLoginSuccess(username);
    } catch (apiError) {
      setState((prevState) => ({
        ...prevState,
        error: apiError.response.data.message,
      }));
    }
  };

  const { t, pendingApiCall } = props;
  const { username, password, error } = state;
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

const LoginPageWithTranslation = withTranslation()(LoginPage);
export default withApiProgress(LoginPageWithTranslation, "/api/1.0/auth");
