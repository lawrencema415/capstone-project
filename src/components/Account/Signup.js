import React, {Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constant';

class Signup extends Component {
  state = {
    email: '',
    name: '',
    password: '',
    password2: '',
    birthday: '',
    error: null
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newUser = this.state;
    axios.post(`${API_URL}/auth/register`, newUser)
    .then(res => {
      axios.post(`${API_URL}/auth/login`, newUser, {withCredentials:true})
      .then( res => {
        this.props.setCurrentUser(res.data.id);
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });

    })
    .catch(err => this.setState({error: [err.response.data.message]}));

  };


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
          <input type="password" id="password2" name="password2" value={this.state.password2} onChange={this.handleChange} placeholder="Confirm password" />
          <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} placeholder="What should we call you?" />
          <input type="date" id="birthday" name="birthday" value={this.state.birthday} onChange={this.handleChange} placeholder="birthday" />
          <button type="submit">Sign up</button>
        </form>
        <h3>Already have an account? <a href="#">Log In</a></h3>
      </div>
    )
  }
}

export default Signup;
