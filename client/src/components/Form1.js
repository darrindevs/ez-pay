import e from 'express';
import React, { Component } from 'react';

export default class Form1 extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAbout = this.onChangeAbout.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            about: '',
            users: [] // for now we are setting this manually 
        }
    }
}

// eventually we will pull the user from the db ... 
// but for now we are going to hard code the values
// componentdidmount = lifecycle method . will automatically get called before anything loads on the page
componentDidMount() {
    this.setState({
        users: ['test user'],
        username: 'test user'
    })
}


// we are going to seelct a user manually for now 
onChangeUsername(e) {
    this.setState({
        username: e.target.value //this is the value from the form 

    });
}

onChangeName(e) {
    this.setState({ // this refers to the class 
        name: e.target.value //this is the value from the form 

    });
}

onChangeAbout(e) {
    this.setState({
        about: e.target.value //this is the value from the form 

    });
}


onsubmit(e) {
    e.preventDefault(); // prevent default html form behavior
    const profile = {
        username: this.state.username,
        name: this.state.name,
        about: this.state.about
    }
    console.log(profile);
    //window.location = "/"; //this takes the user to the specified path . like a redirect???
}

render() {
    return (
        <div>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>
                    Username
                    </label>
                    <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
                    </select>
                    {   //select from our users array from db
                        this.state.users.map(function(user)) {
                            return <option 
                            key={user}
                            value={user}>{user}
                            </option>;
                        })
                    }
                </div>
                <div className="form-group">
                    <label>
                    Name 
                    </label>
                    <input type="text"
                    required
                    className="form control"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    />
                </div>
                <div className="form-group">
                    <label>
                    About 
                    </label>
                    <input type="text"
                    required
                    className="form control"
                    value={this.state.about}
                    onChange={this.onChangeAbout}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Profile" className="button"></input>
                </div>
             </form>
             
        </div>
    )
}