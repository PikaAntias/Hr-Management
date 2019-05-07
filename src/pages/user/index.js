import React, { Component } from 'react';
import './style.css';
import { Switch, Route } from 'react-router-dom';
import Background from './bg-01.jpg';
import { Link } from 'react-router-dom';
import {rrfProps, fire} from '../../store';
const style_a = { // ini
	backgroundImage: `url(${Background})`
};
class User extends Component {

	constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }

	login(e) {
    e.preventDefault();
		const { email, password } = this.state
		console.log(email);
		console.log(password);
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error);
    });
  }

	handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render(){
    return (
      <div>
        <title>Login</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css" />
        <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />
        <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css" />
        <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css" />
        <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css" />
        <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css" />
        <link rel="stylesheet" type="text/css" href="css/util.css" />
        <link rel="stylesheet" type="text/css" href="css/main.css" />
        <div className="limiter">
          <div className="container-login100"style={style_a}>
            <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
              <form className="login100-form validate-form flex-sb flex-w">
                <span className="login100-form-title p-b-20">
                  Welcome
                </span>
                <div className="p-t-20 p-b-9">
                  <span className="txt1">
                    Username
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Username is required">
								<input value={this.state.email} onChange={this.handleChange} class="input100" type="email" name="email" />
									<span class="focus-input100"></span>

                </div>
                <div className="p-t-13 p-b-9">
                  <span className="txt1">
                    Password
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Password is required">
								<input value={this.state.password} onChange={this.handleChange} class="input100" type="password" name="password" />
									<span class="focus-input100"></span>
                </div>
                <div className="container-login100-form-btn m-t-17">
									<button onClick={this.login} type="submit" id="login" class="text-center btn btn-danger">
										Log In
									</button>
                </div>
                <div className="w-full text-center p-t-55">
                  <span className="txt2">
                    Dont have account?
										&nbsp;

                  </span>
                  <Link to={`/register`} className="txt2 bo1">
                    Register Here!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1" />
      </div>
    );
  }
}
export default User;
