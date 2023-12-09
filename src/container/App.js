import React, { Component } from "react";
import UserSignupPage from "../pages/UserSignupPage";
import LanguageSelector from "../components/LanguageSelector";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import { HashRouter as Router, Routes, Route, Navigate,Redirect } from "react-router-dom";
import TopBar from "../components/TopBar";
import {Authentication} from "../shared/AuthenticationContext";

class App extends Component {
  static contextType = Authentication; 
  render() {
      const isLoggedIn  = this.context.state.isLoggedIn;
    return (
      <div>
        <Router>
          <TopBar />
          <Routes>
            <Route path="/" Component={HomePage} />
            {!isLoggedIn && 
            <Route path="/login" Component={LoginPage} />}
            <Route path="/signup" Component={UserSignupPage} />
            <Route path="/user/:username" Component={UserPage} />
            <Route path="*" element={<Navigate to="/" />} />       
          </Routes>
        </Router>
        <LanguageSelector />
      </div>
    );
  }
}
export default App;