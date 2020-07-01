import React ,{Component} from 'react';
import axios from 'axios';
import '../css/home.css';
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }
    getUsersData() {
        axios
            .get(`http://localhost:5000/`, {})
            .then(res => {
                const data = res.data
                console.log(data)
                const users = data.data.map(u =>
                    <div key = {u.messageid} className="content">
                        <div className="content-header">
                            <p>{u.name}</p>
                        </div>
                        <div className="content-post">
                            <p>{u.post}</p>
                        </div>
                    </div>)
                this.setState({
                    users
                })
            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }
    render() {

        return (
            <div>{this.state.users}</div>
        )
    }
}

export default Comment;