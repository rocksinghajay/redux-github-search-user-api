import React from 'react';
import { Link} from 'react-router';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUsers} from '../actions/users';
class User extends React.Component {
    componentDidMount() {
        this.props.dispatch(setUsers([]))
        axios.get(`https://api.github.com/search/users?q=${this.props.params.username}`)
        .then(response =>{
            this.props.dispatch(setUsers(response.data.items))
        })
    }
    render() {
        console.log(this.props)
        const { users } = this.props.userReducers;
        if (!users.length) {
            return (<div className="user-page">LOADING...</div>);
        }
        return (
            <div className="user-page">
               { users.map(
                (user, index) => {
                    return (
                        <div className="user-info" key={index}>
               <span> <Link to="/" style={{fontWeight:"bold",padding:"10px",fontSize:"20px"}}>Home</Link></span><br /><br/>
                    <Link className="user-info__text" to={`/newUser/${user.login}`} ><br />
                        <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                        <h2 className="user-info__title">{user.login}</h2><br /> <br /> <br />
                    </Link>
               <span> <Link onClick={() => window.open(user.html_url)} style={{fontWeight:"bold",padding:"10px",fontSize:"20px",cursor:"pointer"}}>Go to github</Link></span><br /><br/>
                </div>
                    )
                }
            )}
            </div>
        );
    } 
};
export default connect(state => state)(User);
