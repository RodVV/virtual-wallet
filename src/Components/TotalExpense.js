import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TotalExpense extends Component {
//   constructor() {
//     super();
//     this.state = {
//       total: 0,
//     };
//   }

  // getTotal() {
  //   const { expense } = this.props;
  // https://www.delftstack.com/howto/javascript/sum-array-of-objects-javascript/
  // this.setState({
  //   total: sumTotal,
  // });
  // const sumTotal = expense.reduce((prev, curr) => {
  //   const getCurrency = Object.entries(expense.exchangeRates).find(
  //     (currency) => currency.includes(expense.currency),
  //   );
  //   return prev + (parseFloat(curr) * getCurrency[1].ask);
  // });
  //   const getCurrency = expense.exchangeRates.find((exchange) => exchange === expense.currency);
  //   console.log(getCurrency);
  // }

  // handleClick = () => {
  //   const { expense } = this.props;
  //   const sumTotal = expense.reduce((acc, curr) => {
  //     const currentCurrencie = Object.entries(curr.exchangeRates)
  //       .find((currency) => currency[0] === curr.currency);
  //     return acc + (curr.value * currentCurrencie[1].ask);
  //   }, 0);
  //   console.log(sumTotal);
  // }

  render() {
    const { expense } = this.props;
    const total = expense.reduce((acc, curr) => {
      const currentCurrencie = Object.entries(curr.exchangeRates)
        .find((currency) => currency[0] === curr.currency);
      return acc + (curr.value * currentCurrencie[1].ask);
    }, 0);
    return (
      <div>
        <p data-testid="total-field">{ total.toFixed(2) }</p>
        <button
          type="submit"
          onClick={ this.handleClick }
        >
          Verificar
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    expense: state.wallet.expenses,
  };
}

TotalExpense.propTypes = {
  expense: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(TotalExpense);
