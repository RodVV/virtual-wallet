import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isDisable: true,
    };
  }

  handleClick = () => {
    const path = '/carteira';
    const { history, userLogin } = this.props;
    const { email } = this.state;
    userLogin(email);
    history.push(path);
  }

  // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript/48800#48800

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      const { email, password } = this.state;
      const VALID_EMAIL = /\S+@\S+\.\S+/;
      const PASSWORD_LENGTH = 5;
      this.setState({
        isDisable: !(VALID_EMAIL.test(email) && password.length > PASSWORD_LENGTH),
      });
    });
  }

  render() {
    const { email, password, isDisable } = this.state;
    return (
      <div>
        <label htmlFor="email">
          <input
            type="email"
            placeholder="Email"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ email }
            name="email"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="Password"
            data-testid="password-input"
            onChange={ this.handleChange }
            value={ password }
            name="password"
          />
        </label>
        <button
          type="submit"
          onClick={ this.handleClick }
          disabled={ isDisable }
        >
          Entrar
        </button>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLogin: (email) => dispatch(loginAction(email)),
  };
}

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }),
  userLogin: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
