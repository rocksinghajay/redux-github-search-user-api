import React from 'react';
import {Link} from "react-router";
import axios from 'axios';
import {connect} from 'react-redux';
import {ReposActions} from '../actions/repos'
class Repos extends React.Component{
    componentDidMount() {
        this.props.dispatch(ReposActions({}));
        axios.get(`https://api.github.com/users/${this.props.params.username}/repos`)
        .then(response =>{
            this.props.dispatch(ReposActions(response.data)) 
        })
    }
    render(){
        const { repos } =this.props.reposReducers;
        if (!repos.length) {
            return <div>LOADING PUBLIC REPOS...</div>
            }
        return(
            <div className="following-page">
            <h2>Repos of {this.props.params.username}</h2>
    <ul>
        {repos.map(
             (user, index) => {
                return (
                    <div className="user-info" key={index}>
               <span> <Link to="/" style={{fontWeight:"bold",padding:"10px",fontSize:"20px"}}>Home</Link></span><br /><br/>
                    
                <Link className="user-info__text"><br />
                    <h2 className="user-info__title"> {user.full_name} </h2>
                </Link>
               <span> <Link onClick={() => window.open(user.html_url)} style={{fontWeight:"bold",padding:"10px",fontSize:"20px",cursor:"pointer"}}>Go to this Repo</Link></span><br /><br/>
                
            </div>
                )
            }
        )}
    </ul>
          </div>
        )
    }
} 
export default connect(state => state)(Repos)