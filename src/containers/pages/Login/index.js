import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { actionUserName } from '../../../config/redux/action';
import { loginUserAPI } from '../../../config/redux/action';
import Button from '../../../components/atoms/Button';
import './Login.scss';

class Login extends Component {
  // changeUser = () => {
  //     this.props.changeUsername()
  // }

    // eslint-disable-next-line react/state-in-constructor
    state = {
      email: '',
      password: '',
    }

    handleChangeText = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    }

    handleLoginSubmit = async () => {
      const { email, password } = this.state;
      const { history, loginAPI } = this.props;
      const res = await loginAPI({ email, password }).catch((err) => err);
      if (res) {
        console.log('login success: ', res);
        localStorage.setItem('userData', JSON.stringify(res));
        this.setState({
          email: '',
          password: '',
        });
        history.push('/');
      } else {
        console.log('Login Failed');
      }
    }

    render() {
      const { email, password } = this.state;
      const { isLoading } = this.props;
      return (
        <div className="auth-container">
          <div className="auth-card">
            <p className="auth-title">Login Page</p>
            <input
              className="input"
              id="email"
              placeholder="Email"
              type="text"
              onChange={this.handleChangeText}
              value={email}
            />
            <input
              className="input"
              id="password"
              placeholder="Password"
              type="password"
              onChange={this.handleChangeText}
              value={password}
            />
            {/* <button className="btn" onClick={this.handleRegistrSubmit}>REGISTER</button> */}
            <Button onClick={this.handleLoginSubmit} title="LOGIN" loading={isLoading} />
          </div>
        </div>
      );
    }
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispatch) => ({
  loginAPI: (data) => dispatch(loginUserAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Login);
