import React, { Component } from 'react';
import './main.css';
import './util.css';
import {Switch, Route} from 'react-router-dom';
import Background from './bg-01.jpg';
import {rrfProps, fire} from '../../store';

const style_a = {
	backgroundImage: `url(${Background})`
};

class LoginAdmin extends Component {

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

    render() {
        return (
            <div class="limiter">
				<div class="container-login100" style={style_a}>
					<div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
						<form class="login100-form validate-form flex-sb flex-w">
							<span class="login100-form-title p-b-20">
								Welcome Admin
							</span>

							<div class="p-t-20 p-b-9">
								<span class="txt1">
									Username
								</span>
							</div>
							<div class="wrap-input100 validate-input" data-validate = "Username is required">
								<input value={this.state.email} onChange={this.handleChange} class="input100" type="email" name="email" />
									<span class="focus-input100"></span>

							</div>

							<div class="p-t-13 p-b-9">
								<span class="txt1">
									Password
								</span>

							</div>
							<div class="wrap-input100 validate-input" data-validate = "Password is required">
								<input value={this.state.password} onChange={this.handleChange} class="input100" type="password" name="password" />
									<span class="focus-input100"></span>

							</div>

							<div class="container-login100-form-btn m-t-25">
								<button onClick={this.login} type="submit" id="login" class="text-center btn btn-danger">
									Log In
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

        );
    }
}

export default LoginAdmin;
