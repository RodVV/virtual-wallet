import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TotalExpense from './TotalExpense';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          Email:
          { userEmail }
        </p>
        <p>
          Total a pagar:
        </p>
        <TotalExpense />
        <p data-testid="header-currency-field">
          BRL
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;

function mapStateToProps(state) {
  return {
    userEmail: state.user.email,
  };
}

export default connect(mapStateToProps)(Header);
