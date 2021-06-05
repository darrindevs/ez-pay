import React, { Component } from 'react';
import axios from 'axios';

//todo put our functions here 

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.onChangeAbout = this.onChangeAbout.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeAbout(e) {
    this.setState({
      about: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const profile = {
      about: this.state.about
    }

    console.log(profile);
    // todo update the url 
    axios.post('http://localhost:5000/users/add')
      .then(res => console.log(res.data));

    this.setState({
      about: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
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
            <input type="submit" value="Update About" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
} 

