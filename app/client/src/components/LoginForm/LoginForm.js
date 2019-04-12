import React, { Component } from 'react';
import Styles from './LoginForm.module.css';
import BaseStyles from '../../BaseStyles/Input.module.css';

export default function LoginForm(props) {
  const inputStyles = [BaseStyles.Input, Styles.Input, 'browser-default'];
  return (
    <form className={Styles.LoginForm}>
      <input
        className={inputStyles.join(' ')}
        type="text"
        id="logEmail"
        placeholder="Email Address"
      />
      <input
        className={inputStyles.join(' ')}
        type="password"
        id="logPass"
        placeholder="Password"
      />
      <button onClick={props.changeVisibility} value="showHomepage">
        Back
      </button>
    </form>
  );
}
}
const mapStateToProps = state => {
  return {
    // state: reducerSlice.prop
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginInit: (email, password) =>
      dispatch(actions.loginInit(email, password)),
    loadUser: () => dispatch(actions.loadUserInit())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
