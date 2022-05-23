import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import Form from '../Components/Form';
import { getCurrencyThunk } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    return (
      <>
        <Header />
        <Form />
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrencies: () => dispatch(getCurrencyThunk()),
  };
}

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Wallet);
