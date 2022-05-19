import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <input
          type="email"
          placeholder="Email"
          data-testid="email-input"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          type="password"
          placeholder="Password"
          data-testid="password-input"
          onChange={ this.handleChange }
          value={ password }
        />
        <button
          type="submit"
          onClick={ this.handleClick }
        >
          Entrar
        </button>

      </div>
    );
  }
}

export default Login;
// para Rodrigo do futurp: falta fazer as actions e os dispatchs...
