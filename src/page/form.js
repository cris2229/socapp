import React  from 'react';
import axios from "axios";
//import ReactDOM from "react-dom";
import Cookies from 'js-cookie';
import '../css/header.css'
class MyForm extends React.Component {
    constructor() {
        super();
        const email = Cookies.get('email');
        const name = Cookies.get('name');
        this.state = {
            values: {
                email: email,
                name: name,
                message: ''
            }
        };
    }
    mySubmitHandler = async e => {
        e.preventDefault();
        const values = this.state
        axios.post('http://localhost:5000/add',(values))
            .then((res) => {
                console.log(res);
                console.log(res.data);
                window.location.reload(false);
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }

    myChangeHandler = e =>this.setState({

        values: { ...this.state.values, [e.target.name]: e.target.value }
    });

    render() {

        return (
            <div id="sidebar">
            <form onSubmit={this.mySubmitHandler} >
                <h1>Create a Post</h1>
                 <input type="hidden" name="name" onChange={this.myChangeHandler} />
                 <input type="hidden" name="email" onChange={this.myChangeHandler} />
                <textarea
                    className="text-area"
                    name="message"
                    onChange={this.myChangeHandler}
                /> <br />
                <input
                    type='submit'
                    className="button"
                    value="Upload Post"
                />

            </form>
            </div>
        );
    }
}

export default MyForm;
