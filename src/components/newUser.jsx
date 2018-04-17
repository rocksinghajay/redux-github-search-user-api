import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import {connect} from 'react-redux';
import {setNewUsers} from '../actions/newusers';
class newUser extends React.Component {
    componentDidMount() {
        this.props.dispatch(setNewUsers({}));
        axios.get(`https://api.github.com/users/${this.props.params.username}`)
        .then(response =>{
            this.props.dispatch(setNewUsers(response.data)) 
        })
    }
    renderStat(stat) {
        return (
            <li key={stat.name} className="user-info__stat">
                <Link to={stat.url}>
                    <p className="user-info__stat-value">{stat.value}</p>
                    <p className="user-info__stat-name">{stat.name}</p>
                </Link>
            </li>
        );
    }
   
    render() {
        const { newusers } = this.props.newuserReducers;
        
        
        if (!newusers) {
            return (<div className="user-page">LOADING...</div>);
        }
        const user = newusers;
        const stats = [
            {
                name: 'Public Repos',
                value: user.public_repos,
                url: `/newUser/${this.props.params.username}/repos`
            },
            {
                name: 'Followers',
                value: user.followers,
                url: `/newUser/${this.props.params.username}/followers`
            },
            {
                name: 'Following',
                value: user.following,
                url: `/newUser/${this.props.params.username}/following`
            }
           
        ];
        return (
            <div className="user-page">
                <div className="user-info">
               <span> <Link to="/" style={{fontWeight:"bold",padding:"10px",fontSize:"20px"}}>Home</Link></span><br /><br/>
               <br /><br/>
                    <Link className="user-info__text" to={`/user/${user.login}`}>
                        <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                        <h1 className="user-info__title">{user.login} @{user.name}</h1>
                        <h4 className="user-info__bio">{user.bio}</h4>
                        <h4 className="user-info__bio">LOCATION: {user.location}</h4>
                        <p className="user-info__bio">BLOG: {user.blog}</p>
                    </Link>
               <span> <Link onClick={() => window.open(user.html_url)} style={{fontWeight:"bold",padding:"10px",fontSize:"20px",cursor:"pointer"}}>Go to github</Link></span><br /><br/>
                    <ul className="user-info__stats">
                        {stats.map(this.renderStat)}
                    </ul>
                </div>
                <hr />
                {this.props.children}

            </div>
        );
    }
};
export default connect(state => state)(newUser);
