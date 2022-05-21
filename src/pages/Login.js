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
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = () => {
    const path = '/carteira';
    const { history, userLogin } = this.props;
    userLogin(this.state);
    history.push(path);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const PASSWORD_LENGTH = 6;
    return (
      <div>
        <input
          type="email"
          placeholder="Email"
          data-testid="email-input"
          onChange={ this.handleChange }
          value={ email }
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          data-testid="password-input"
          onChange={ this.handleChange }
          value={ password }
          name="password"
        />
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ password.length < PASSWORD_LENGTH }
        >
          Entrar
        </button>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLogin: (state) => dispatch(loginAction(state)),
  };
}

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }),
  userLogin: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
