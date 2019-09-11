import React, {Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constant';
import './Form.css';
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

  redirect = () => {
    this.props.history.push('/login');
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="logo">
            <img src="https://spotify-clone.s3-us-west-1.amazonaws.com/favicon-32x32.png" alt="logo"/>
            Spotafly
          </div>
          <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
          <input type="password" id="password2" name="password2" value={this.state.password2} onChange={this.handleChange} placeholder="Confirm password" />
          <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} placeholder="What should we call you?" />
          <input type="date" id="birthday" name="birthday" value={this.state.birthday} onChange={this.handleChange} placeholder="birthday" />
          <button class="select-button" type="submit">Sign up</button>
        </form>
        <h3 className="redirect">Already have an account? <a onClick={this.redirect}>Log In</a></h3>
      </div>
    )
  }
}

export default Signup;
