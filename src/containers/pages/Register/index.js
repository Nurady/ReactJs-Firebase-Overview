import React, { Component } from 'react';
import './Register.scss';
import { connect } from 'react-redux';
import Button from '../../../components/atoms/Button';
import { registerUserAPI } from '../../../config/redux/action';

class Register extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
      email: '',
      password: '',
      // isLoading: false
    }

    handleChangeText = (e) => {
      // console.log(e.target.value)
      this.setState({
        [e.target.id]: e.target.value,
      });
    }

    handleRegistrSubmit = async () => {
      // console.log('email: , ', this.state.email);
      // console.log('password: , ', this.state.password);
      const { registerAPI } = this.state;
      const { email, password } = this.state;
      const res = await registerAPI({ email, password }).catch((err) => err);
      if (res) {
        this.setState({
          email: '',
          password: '',
        });
      }
      // else {
      //     console.log('Login Failed')
      // }

      // console.log('data before send: ', email, password)
      // this.setState({
      //     isLoading : true
      // })
      // setTimeout(() => {
      //     this.setState({
      //         isLoading : false
      //     })
      // }, 5000);
      // firebase.auth().createUserWithEmailAndPassword(email, password)
      // .then((res) => {
      //     // var user = userCredential.user;
      //     console.log('success: ', res);
      // })
      // .catch((error) => {
      //     var errorCode = error.code;
      //     var errorMessage = error.message;
      //     console.log('error: ', errorCode, errorMessage);
      // });
    }

    render() {
      const { email, password } = this.state;
      const { isLoading } = this.props;
      return (
        <div className="auth-container">
          <div className="auth-card">
            <p className="auth-title">Register Page</p>
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
            <Button onClick={this.handleRegistrSubmit} title="REGISTER" loading={isLoading} />
          </div>
        </div>
      );
    }
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispatch) => ({
  registerAPI: (data) => dispatch(registerUserAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Register);
