import React from 'react';
import {Link} from "react-router";
import axios from 'axios';
import {connect} from 'react-redux';
import {FollowersActions} from '../actions/followers';
class Followers extends React.Component{
    componentDidMount() {
        this.props.dispatch(FollowersActions({}));
        axios.get(`https://api.github.com/users/${this.props.params.username}/followers`)
        .then(response =>{
            this.props.dispatch(FollowersActions(response.data))
        })
    }
    render(){
        const {followers} = this.props.followersReducers;
        if (!followers.length) {
            return <div>LOADING FOLLOWERS...</div>
            }
        return(
            <div className="followers-page">
            <h2>Followers of {this.props.params.username}</h2>
    <ul>
        {followers.map(
             (user, index) => {
                return (
                    <div className="user-info" key={index}>
               <span> <Link to="/" style={{fontWeight:"bold",padding:"10px",fontSize:"20px"}}>Home</Link></span><br /><br/>
                    
                <Link className="user-info__text" to={`/newUser/${user.login}`} ><br />
                    <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                    <h2 className="user-info__title">{user.login} </h2><br /> <br /> <br />
                </Link>
               <span> <Link onClick={() => window.open(user.html_url)} style={{fontWeight:"bold",padding:"10px",fontSize:"20px",cursor:"pointer"}}>Go to github</Link></span><br /><br/>
                
            </div>
                )
            }
        )}
    </ul>
          </div>
        ) 
    }
} 
export default connect(state => state)(Followers);