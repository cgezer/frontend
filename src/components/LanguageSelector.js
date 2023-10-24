import React from 'react';
import { withTranslation } from 'react-i18next';
import { changeLanguage } from '../api/apiCalls';

const LanguageSelector = (props) => {

   const onChangeLanguage = (language) => {
        const { i18n } = props;
        changeLanguage(language);
        i18n.changeLanguage(language);    
      };
    return (
        <div className='container'>
            <img
              src="https://flagsapi.com/TR/flat/32.png"
              alt="Turkish Flag"
              onClick={() => onChangeLanguage("tr")}
              style={{ cursor: "pointer" }}
            ></img>
              <img
              src="https://flagsapi.com/US/flat/32.png"
              alt="USA Flag"
              onClick={() => onChangeLanguage("en")}
              style={{ cursor: "pointer" }}
            ></img>
          </div>
    );
};

export default withTranslation()(LanguageSelector);