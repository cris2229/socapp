import React ,{Component} from 'react';
import logo from '../logo.png';
import '../css/header.css';
import Cookies from 'js-cookie';
import { GoogleLogout } from 'react-google-login';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display : 'none'
        }
    }


    render() {

        const responseLogout = () => {
            Cookies.remove('name');
            Cookies.remove('email');
            Cookies.remove('url');
            window.location.reload(false);
        };
        const mouseEnter = () => {
            this.setState({display: 'block'})
        }

        const mouseLeave = () =>  {
            this.setState({display: 'none'})
        }
        const email = Cookies.get('email');
        //const name = Cookies.get('name');
        const url = Cookies.get('url');
        var display = 'none';
        if(email){
                display = 'block';
        }
        return (
            <div className="home">
                    <img src={logo} className="logo" alt="logo"  />
                    <div className="logout" style = {{display : display}} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        <img src={url} className="gmail-logo" alt="logo"  />
                        <div className="dropdown-content" style = {{display: this.state.display}}>
                        <GoogleLogout
                            clientId="546717923007-92gii1n83c2qsdvjnrucgdaqmcnlj36h.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={responseLogout}
                        />
                        </div>
                    </div>
                <br />
            </div>
        );
    }
}
export default Header;