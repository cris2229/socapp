import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Switch,Redirect} from 'react-router-dom';
import Userlogin from './page/Login';
import Home from './page/Home';
import AuthAPi from './AuthApi';
import Form from './page/form';
import Cookies from 'js-cookie';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false
        };
    }
        render()
        {
            var auth = this.state.auth;
            const email = Cookies.get('email');
            if(email)
            {
                auth = true;
            }

            return (<div>
                <AuthAPi.Provider value={{auth}}>
                    <Router>
                        <Routes/>
                    </Router>
                </AuthAPi.Provider>
            </div>)
        }
    }


const Login = () => {
    return(<div>
      <Userlogin/>
    </div>)
};
const Dashboard = () => {
    return(
        <div id="main-content">

        <Form/>
      <div id="content"><Home /></div>
    </div>)
    };

const Routes = () =>
{
    const Auth = React.useContext(AuthAPi);
    return(<div id="content">
      <Switch>
        <ProtectedLogin path="/login" auth = {Auth.auth} component={Login}/>
        <ProtectedRoute path="/" auth = {Auth.auth} component={Dashboard}/>
      </Switch>
    </div>);
};

const ProtectedRoute = ({auth,component:Component,...rest}) =>
{
  return (
      <Route
          {...rest}
          render = {
              ()=>auth?(
                  <Component/>
              ):
                  (
                      <Redirect to="/login"/>
                  )
          }
      />
  )
}

const ProtectedLogin = ({auth,component:Component,...rest}) =>
{
    return (
        <Route
            {...rest}
            render = {
                ()=>!auth?(
                    <Component/>
                ):
                    (
                        <Redirect to="/"/>
                    )
            }
        />
    )
}

export default App;
