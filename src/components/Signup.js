import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup, startSignup, clearAuthState } from '../actions/auth';
import { Redirect } from 'react-router-dom';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
    };
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }
  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const { email, password, confirmPassword, name } = this.state;

    if (email && password && confirmPassword && name) {
      this.props.dispatch(startSignup());
      this.props.dispatch(signup(email, password, confirmPassword, name));
    }
    this.setState({
      email: '',
      password: '',
      name: '',
    });
  };

  render() {
    const { inProgress, error, success, isLoggedIn } = this.props.auth;
    if (isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header"> Register</span>
        {error && <div className="alert error-dailog">{error}</div>}
        {success && <div className="alert success-dailog">{success}</div>}

        <div className="field">
          <input
            placeholder="Name"
            type="text"
            required
            onChange={(e) => this.handleInputChange('name', e.target.value)}
            value={this.state.name}
          />
        </div>
        <div className="field">
          <input
            placeholder="Email"
            type="email"
            required
            onChange={(e) => this.handleInputChange('email', e.target.value)}
            value={this.state.email}
          />
        </div>

        <div className="field">
          <input
            placeholder="Password"
            type="password"
            required
            onChange={(e) => this.handleInputChange('password', e.target.value)}
            value={this.state.password}
          />
        </div>
        <div className="field">
          <input
            placeholder="ConfirmPassword"
            type="password"
            required
            onChange={(e) =>
              this.handleInputChange('confirmPassword', e.target.value)
            }
            value={this.state.confirmPassword}
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button onClick={this.onFormSubmit} disabled={inProgress}>
              Checking status...
            </button>
          ) : (
            <button onClick={this.onFormSubmit} disabled={inProgress}>
              Register
            </button>
          )}
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Signup);
