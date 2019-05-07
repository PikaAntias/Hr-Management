import React, { Component } from 'react';
//import './main.css';
import {Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {rrfProps, fire} from '../../store';
import Background from './bg-01.jpg';
const style_a = {
	backgroundImage: `url(${Background})`
};

class Register extends Component {

	constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
			name: '',
      email: '',
      password: ''
    }
  }

	signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
      console.log(error);
    })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

	  render(){
    return (
      <div>
        <title>Register</title>
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
          <div className="container-login100" style={style_a}>
            <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
              <form className="login100-form validate-form flex-sb flex-w">
                <span className="login100-form-title p-b-20">
                  Register
                </span>
                <div className="p-t-20 p-b-9">
                  <span className="txt1">
                    Nama
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Username is required">
								<input value={this.state.name} onChange={this.handleChange} class="input100" type="text" name="name" />
									<span class="focus-input100"></span>
                </div>
                <div className="p-t-20 p-b-9">
                  <span className="txt1">
                    Email
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
                  <button onClick={this.signup} type="submit" className="text-center btn btn-danger">
                    Sign Up
                  </button>
                </div>
                <div className="w-full text-center p-t-55">
                  <span className="txt2">
                    Already Acount? |
										&nbsp;
                  </span>
                  <Link to={`/user`} className="txt2 bo1">
                    Sign In
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
export default Register ;
