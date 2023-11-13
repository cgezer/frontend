import React, { Component } from "react";
import logo from '../assets/eg.jpg';
import{Link} from 'react-router-dom';
import { withTranslation } from "react-i18next";

class TopBar extends Component { 

  render() {
    const { t, isLoggedIn, username,onLogoutSuccess}=this.props;
    console.log("TopBar - Render - isLoggedIn:", this.props.isLoggedIn);
    console.log("TopBar - Render - username:", this.props.username);
   

    let links = (
      <ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
            <li >
              <Link className="nav-link" to="/login" >
              {t('Login')}
              </Link>           
              </li>
              <li>
              <Link className="nav-link" to="/signup">
              {t('Sign Up')}
              </Link>           
              </li>
          </ul>
          );
          if(isLoggedIn){
            links=(
              <ul className="navbar-nav" style={{ marginLeft: 'auto' }}> 
              <li>
              <Link className='nav-link' to={`/user/${username}`}>
              {username} 
            </Link>            
              </li>
              <li className="nav-link" to="/" onClick={onLogoutSuccess} style={{cursor:'pointer'}}>{t('Logout')}</li>
              </ul>
            )
          }
          return (
            <div className="shadow-sm bg-light mb-2">
              <nav className="navbar navbar-light container navbar-expand">
                <Link className="navbar-brand" to="/">
                  <img src={logo} width="60" alt="Hoaxify" /> Hoaxify
                </Link>
                {isLoggedIn ? (  // Eğer kullanıcı giriş yapmışsa
                  <ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
                    <li>
                      <Link className='nav-link' to={`/user/${username}`}>
                        {username} {/* Kullanıcı adını göster */}
                      </Link>
                    </li>
                    <li className="nav-link" to="/" onClick={onLogoutSuccess} style={{cursor:'pointer'}}>
                      {t('Logout')}
                    </li>
                  </ul>
                ) : (
                  // Kullanıcı giriş yapmamışsa diğer linkleri göster
                  <ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
                    <li>
                      <Link className="nav-link" to="/login">
                        {t('Login')}
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/signup">
                        {t('Sign Up')}
                      </Link>
                    </li>
                  </ul>
                )}
              </nav>
            </div>
          );
        }
      }
      
      export default withTranslation()(TopBar);