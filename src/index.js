import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import'./bootstrapt-owerride.scss';
import reportWebVitals from './reportWebVitals';
import './i18n';
import App from '../src/container/App'
import AuthenticationContext from "./shared/AuthenticationContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthenticationContext>
<App />
</AuthenticationContext>
);

reportWebVitals();