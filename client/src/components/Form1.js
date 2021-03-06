// axios + react 
import axios from 'axios';
import React, { Component } from 'react';
// import utils
//import { useStoreContext } from '../utils/GlobalState';
//import { ADD_POST, LOADING } from '../utils/actions';


// components 
import Avatar from "./Avatar";


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
    
    // todo change this to get current logged in user (not all users)
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
      //dispatch({ type: LOADING });
      const profile = {
        name: this.state.name,
        username: this.state.username,
        about: this.state.about
      }
  
      console.log(profile);
      
      //todo update this to update current logged in user
      axios.patch('http://localhost:5000/users/', profile)
        .then(res => console.log(res.data));
  
        this.setState({
          username: '',
          about: ''
        })
    }
  
    render() {
      return (
        <form className="mt-6 space-y-8 divide-y divide-y-blue-gray-200">
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
          <div className="sm:col-span-6">
            <h2 className="text-xl font-medium text-blue-gray-900">Profile</h2>
            <p className="mt-1 text-sm text-blue-gray-500">
              This information will be displayed publicly.
            </p>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="first_name" className="block text-sm font-medium text-blue-gray-900">
              First name
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              autoComplete="given-name"
              className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last_name" className="block text-sm font-medium text-blue-gray-900">
              Last name
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              autoComplete="family-name"
              className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="sm:col-span-6">
            <label htmlFor="username" className="block text-sm font-medium text-blue-gray-900">
              Username
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-blue-gray-300 bg-blue-gray-50 text-blue-gray-500 sm:text-sm">
                ezpay.com/
              </span>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                defaultValue="yourawesomeusername"
                className="flex-1 block w-full min-w-0 border-blue-gray-300 rounded-none rounded-r-md text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label htmlFor="photo" className="block text-sm font-medium text-blue-gray-900">
              Photo
            </label>
            <div className="mt-1 flex items-center">
              <Avatar />
              <div className="ml-4 flex">
                <div className="relative bg-white py-2 px-3 border border-blue-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-500">
                  <label
                    htmlFor="user_photo"
                    className="relative text-sm font-medium text-blue-gray-900 pointer-events-none"
                  >
                    <span>Change</span>
                    <span className="sr-only"> user photo</span>
                  </label>
                  <input
                    id="user_photo"
                    name="user_photo"
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                  />
                </div>
                <button
                  type="button"
                  className="ml-3 bg-transparent py-2 px-3 border border-transparent rounded-md text-sm font-medium text-blue-gray-900 hover:text-blue-gray-700 focus:outline-none focus:border-blue-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-gray-50 focus:ring-blue-500"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="sm:col-span-6">
            <label htmlFor="description" className="block text-sm font-medium text-blue-gray-900">
              About
            </label>
            <div className="mt-1">
              <textarea
                id="about"
                name="about"
                rows={4}
                className="block w-full border-blue-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                value={this.state.about}
                onChange={this.onChangeAbout}
              />
            </div>
            <p className="mt-3 text-sm text-blue-gray-500">
              Brief description for your profile.
            </p>
          </div>

          
        </div>

        <div className="pt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
          <div className="sm:col-span-6">
            <h2 className="text-xl font-medium text-blue-gray-900">Campaign Information</h2>
            <p className="mt-1 text-sm text-blue-gray-500">
              Let people know what you are raising money for.
            </p>
          </div>
          <div className="sm:col-span-6">
            <label htmlFor="description" className="block text-sm font-medium text-blue-gray-900">
              Campaign Description
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                rows={4}
                className="block w-full border-blue-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                defaultValue={''}
              />
            </div>
           
          </div>
        </div>

        <div className="pt-8 flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Save All
          </button>
        </div>
      </form>
      )
    }
  }
  