import React from 'react';
import{signup} from '../api/apiCalls'
import Input from '../components/Input';
import { withTranslation} from 'react-i18next';
import ButtonWithProgress from "../components/ButtonWithProgress";

class UserSignupPage extends React.Component {
  state = {
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null,
    pendingApiCall:false,
    errors:{}
  };
  onChange = (event) => {
    const { name, value } = event.target;
    const errors={...this.state.errors}
    errors[name]=undefined
    if(name == 'password' || name == 'passwordRepeat'){
      if(name == 'password' && value !=this.state.passwordRepeat){
        errors.passwordRepeat='Password mismatch';
      }else if(name=='passwordRepeat'&&value != this.state.password){
        errors.passwordRepeat='Password mismatch';
      }else{
        errors.passwordRepeat=undefined;
      }
    }
    this.setState({
      [name]: value,
      errors
    });
  };
  onClickSingUp = async (event) => {
    event.preventDefault();
    const { username, displayName, password} = this.state;
    const body = {
      username, // username:username,(aynı şeyi ifade eder)
      displayName, // displayName:displayName,
      password, //password:password
    };
    this.setState({pendingApiCall:true});

    try {
      const response=await signup(body)
    } catch (error) {     
      if(error.response.data.validationErrors){
        this.setState({errors: error.response.data.validationErrors});
      }     
    }
    this.setState({pendingApiCall:false})     
  };  
  render() {  
    const {pendingApiCall,errors}=this.state;
    const {username,displayName,password,passwordRepeat}=errors;
    const { t } = this.props;
    return (
      <div className="container">
        <form>
          <h1 className="text-center">{t('Sign Up')}</h1>
          <Input name="username" label={t('Username')} error={username} onChange={this.onChange}/>
          <Input name="displayName" label={t('Display Name')} error={displayName} onChange={this.onChange}/>
          <Input name="password" label={t('Password')} error={password} onChange={this.onChange} type="password" />
          <Input name="passwordRepeat" label={t('Password Repeat')} error={passwordRepeat} onChange={this.onChange} type="password" />
          <div className="text-center">
            <br />
          <ButtonWithProgress 
          onClick={this.onClickSingUp}
          disabled={pendingApiCall || passwordRepeat != undefined}
          pendingApiCall={pendingApiCall}
          text={t('Sign Up')}/>          
          </div>
        </form>
      </div>
    );
  }
}
const userSignupPageWithTranslation = withTranslation()(UserSignupPage);
export default userSignupPageWithTranslation;
