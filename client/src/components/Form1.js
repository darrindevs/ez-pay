import express from 'express';
import axios from 'axios';
import React, { Component } from 'react';

export default class Form1 extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeAbout = this.onChangeAbout.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        name: '',
        username: '',
        about: '',
        users: []
      }
    }
    
    //! this block of code is failing ?
    componentDidMount() {
      axios.get('http://localhost:5000/users/')
        .then(response => {
          if (response.data.length > 0) {
            this.setState({
              users: response.data.map(user => user.username),
              name: response.data[0].name,
              username: response.data[0].username
            })
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
    onChangeName(e) {
      this.setState({
        name: e.target.value
      })
    }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
      }
  
    onChangeAbout(e) {
      this.setState({
        about: e.target.value
      })
    }
  
    
    onSubmit(e) {
      e.preventDefault();
  
      const profile = {
        name: this.state.name,
        username: this.state.username,
        about: this.state.about
      }
  
      console.log(profile);
  
      axios.post('http://localhost:5000/users/add', profile)
        .then(res => console.log(res.data));
  
      //window.location = '/';
    }
  
    render() {
      return (
      <div>
        <h3>Create New Profile</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Name: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group"> 
            <label>Username: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group"> 
            <label>About: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.about}
                onChange={this.onChangeAbout}
                />
          </div>
          
          <div className="form-group">
            <input type="submit" value="Create Profile" className="btn btn-primary" />
          </div>
        </form>
      </div>
      )
    }
  }
  