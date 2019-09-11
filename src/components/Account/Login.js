import React, {Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constant';
import './Form.css';
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
      this.props.history.push('/');
    })
    .catch(err => {
      console.log(err);
      // this.setState({ error: err.response.data.message});
    });
  };

  redirect = () => {
    this.props.history.push('/signup');
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="logo">
            <img src="https://spotify-clone.s3-us-west-1.amazonaws.com/favicon-32x32.png" alt="logo"/>
            Spotafly
          </div>
          <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email" />
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password" />
          <button class="select-button" type="submit">Log In</button>
        </form>
        <h3 className="redirect">Don't have an account? <a onClick={this.redirect}>Sign Up</a></h3>
      </div>
    )
  }
}

export default Login;
