import React, {Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constant';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = this.state;
    axios.post(`${API_URL}/auth/login`, user, {withCredentials:true})
    .then( res => {
      this.props.setCurrentUser(res.data.id);

    })
    .catch(err => {
      this.setState({ error: err.response.data.message});
    });
  };


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email" />
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password" />
          <button type="submit">Log In</button>
        </form>
        <h3>Don't have an account? <a href="#">Sign Up</a></h3>
      </div>
    )
  }
}

export default Login;
