import React ,{Component} from 'react';
import { GoogleLogin } from 'react-google-login';
import '../css/header.css';
import Cookies from 'js-cookie';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email:'',
            url :''
        }
    }
    render() {
        const responseGoogle = response => {
            console.log(response);
            this.setState({name : response.profileObj.name})
            this.setState({email : response.profileObj.email})
            this.setState({url : response.profileObj.imageUrl})
            Cookies.set('name',this.state.name);
            Cookies.set('email',this.state.email);
            Cookies.set('url',this.state.url);
            window.location.reload(false);
                 }
            const responseGooglefail = response => {
                console.log(response);
            };
            return (

                <div className="login">
                    <h2 id="remarks">Hi Join us! Click the button Below</h2>
                    <hr/>
                    <GoogleLogin
                        className="GoogButton"
                        clientId="546717923007-92gii1n83c2qsdvjnrucgdaqmcnlj36h.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGooglefail}
                        cookiePolicy={'single_host_origin'}
                            >
                    </GoogleLogin>
                    <hr/>
                </div>)
    }
}
export default Login;
