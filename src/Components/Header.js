import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail, expense } = this.props;
    // console.log(expense);
    const total = 0;
    // const total = expense.reduce((acc, curValue) => {
    // }, 0);
    // const totalFind = Object.entries(expense);
    // console.log(totalFind);
    return (
      <div>
        <p data-testid="email-field">
          Email:
          { userEmail }
        </p>
        <p>
          Total a pagar:
        </p>
        <p data-testid="total-field">{ total }</p>
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
    expense: state.wallet.expenses,
  };
}

export default connect(mapStateToProps)(Header);
