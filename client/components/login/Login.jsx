import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false,
    };
    this.submitChange = this.submitChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitChange(e) {
    e.preventDefault()
    if (e.target.value === 'Login') {
      fetch('/user/login', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: { 'Content-Type': 'application/JSON' }
      })
        .then(res => res.json())
        .then(data => {
        //  console.log() <Redirect to="/dashboard" />
        // console.log(this.props.history)
        // this.props.history.push('/dashboard');
        this.setState( {redirect: true} );
        }).catch(
          (err) => console.log(err)
        )
    } else {
        fetch('/user/signup', {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: { 'Content-Type': 'application/JSON' }
        })
        .then(res => res.json())
        .then(data => {
          this.setState( {redirect: true} );
        })
        .catch((err) => console.log(err))
    }
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <h1>GG</h1>
        <form id="main">
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            name="username"
            value={ this.state.username }
            placeholder="username"
          />
          <br />
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            name="password"
            value={ this.state.password }
            placeholder="password"
          />
          <br />
          <Link to="/dashboard">
          <input
          onClick={this.submitChange}
          type="submit"
          value="Login"
          />
          </Link>
          <input style= {{}}
            onClick={this.submitChange}
            type="submit"
            value="Signup"
          />
        </form>
        <img src="https://www.wallpaperup.com/uploads/wallpapers/2012/08/11/10567/0f7dbd71eac4d45c59240484af1f96b1-500.jpg" />
      </div>
    );
  }
}

export default withRouter(Login);
