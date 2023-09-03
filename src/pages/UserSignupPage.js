import React from "react";
import{signup} from '../api/apiCalls'

class UserSignupPage extends React.Component {
  state = {
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null,
    pendingApiCall:false
  };
  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  onClickSingUp = async (event) => {
    event.preventDefault();
    const { username, displayName, password } = this.state;
    const body = {
      username, // username:username,(aynı şeyi ifade eder)
      displayName, // displayName:displayName,
      password, //password:password
    };
    this.setState({pendingApiCall:true});

    try {
      const response=await signup(body)
    } catch (error) {      
    }
    this.setState({pendingApiCall:false})     

  //  signup(body)
  //   .then((response)=>{
  //     this.setState({pendingApiCall:false})
  //   }).catch(error=>{
  //     this.setState({pendingApiCall:false})
  //   })
  };
  //   onChange = (event) => {
  //     const value = event.target.value;
  //     const field = event.target.name;
  //     this.setState({
  //       [field]: value,
  //     });
  //   };
  //   OnChangeUsername = event=> {
  //     this.setState({
  //       username: event.target.value,
  //     });
  //   };
  //   OnChangeDisplayName = event=> {
  //     this.setState({
  //       displayName: event.target.value,
  //     });
  //   };
  //   OnChangePassword = event => {
  //     this.setState({
  //       password: event.target.value,
  //     });
  //   };

  //   OnChangePasswordRepeat = event => {
  //     this.setState({
  //       passwordRepeat: event.target.value,
  //     });
  //   };
  
  render() {
    const {pendingApiCall}=this.state;
    return (
      <div className="container">
        <form>
          <h1 className="text-center">Sing Up</h1>
          <div className="form-group">
            <label>Username</label>
            <input className="form-control" name="username" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Display Name</label>
            <input className="form-control" name="displayName" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" name="password" type="password" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Password Repeat</label>
            <input
            className="form-control"
              name="passwordRepeat"
              type="password"
              onChange={this.onChange}
            />
          </div>
          <div className="text-center">
          <button 
          className="btn btn-primary" 
          onClick={this.onClickSingUp}
          disabled={this.state.pendingApiCall}>
            {this.state.pendingApiCall &&<span className="spinner-border spinner-border-sm"></span>}
            Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}
export default UserSignupPage;
