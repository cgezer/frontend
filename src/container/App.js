import React, { Component } from "react";
import UserSignupPage from "../pages/UserSignupPage";
import LanguageSelector from "../components/LanguageSelector";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TopBar from "../components/TopBar";

class App extends Component {
  state = {
    isLoggedIn: false,
    username: undefined
  };

  onLoginSuccess = (username) => {
    this.setState({
      username,
      isLoggedIn: true
    });
  };

  onLogoutSuccess = () => {
    localStorage.removeItem('username'); // Kullanıcı çıkış yaptığında localStorage'daki kullanıcı adını temizle
    this.setState({
      isLoggedIn: false,
      username: undefined
    });
  };
  render() {
    const { isLoggedIn, username } = this.state;
    console.log("App-isLoggedIn",isLoggedIn);
    console.log("App-username",username);
    return (
      <div>
        <Router>
          <TopBar
            isLoggedIn={isLoggedIn}
            username={username}
            onLogoutSuccess={this.onLogoutSuccess}
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {!isLoggedIn && (
              <Route
                path="/login"
                element={<LoginPage onLoginSuccess={this.onLoginSuccess} />}
              />
            )}
            <Route path="/signup" element={<UserSignupPage />} />
            <Route path="/user/:username" element={<UserPage username={username}/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
        <LanguageSelector />
      </div>
    );
  }
}
export default App;