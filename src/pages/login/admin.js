import React, { Component } from 'react';
import './style.css';
import {Switch, Route} from 'react-router-dom';

class Login extends Component {
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
          <div className="container-login100" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
            <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
              <form className="login100-form validate-form flex-sb flex-w">
                <span className="login100-form-title p-b-20">
                  Sign In Admin
                </span>
                <div className="p-t-20 p-b-9">
                  <span className="txt1">
                    Username
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Username is required">
                  <input className="input100" type="text" name="username" />
                  <span className="focus-input100" />
                </div>
                <div className="p-t-13 p-b-9">
                  <span className="txt1">
                    Password
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <input className="input100" type="password" name="pass" />
                  <span className="focus-input100" />
                </div>
                <div className="container-login100-form-btn m-t-25">
                  <button className="text-center btn btn-danger">
                    Sign In
                  </button>
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
