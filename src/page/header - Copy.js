import React ,{useState,Component} from 'react';
import logo from '../logo.svg';
import '../css/header.css';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false }
    }

    render() {
        return (
            <div className="home">
                    <img src={logo} className="logo" alt="logo" />
                {!this.state.isLoggedIn ?
                    <div className="login">
                        <h2></h2>
                    <GoogleLogin
                        className="GoogButton"
                        clientId="546717923007-92gii1n83c2qsdvjnrucgdaqmcnlj36h.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={(response) => { this.setState(() => { return { isLoggedIn: true  } }) }}
                        onFailure={(response) => { this.setState(() => { return { isLoggedIn: false } }) }} >
                    </GoogleLogin>
                    </div>
                    :
                    <div>
                    <GoogleLogout
                        buttonText="Logout"
                        onLogoutSuccess={(response) => { this.setState(() => { return { isLoggedIn: false } }) }}
                    /> <Home/>
                    </div>
                }
                <br />
            </div>
        );
    }
}
export default Header;