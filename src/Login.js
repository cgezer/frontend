import React from "react";

class Login extends React.Component {
  state = {
    username: null,
    password: null,
  };

  render() {
    return (
      <div className="container">
        <form>
          <h1 className="text-center">Login</h1>

          <div className="form-group">
            <label>Username</label>
            <input className="form-control" name="username" type="text" />
            <label>Password</label>
            <input className="form-control" name="password" type="password" />
            <div className="text-center">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
