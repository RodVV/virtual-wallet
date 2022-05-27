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
    const { expenses } = this.props;
    return (
      <>
        <Header />
        <Form />
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
            {expenses.map((expense, index) => {
              const currencies = Object.entries(expense.exchangeRates)
                .find((obj) => obj[1].code === expense.currency)[1];
              return (
                <tr key={ index }>
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>{parseFloat(expense.value).toFixed(2)}</td>
                  <td>{currencies.name}</td>
                  <td>{parseFloat(currencies.ask).toFixed(2)}</td>
                  <td>{parseFloat(currencies.ask * expense.value).toFixed(2)}</td>
                  <td>Real</td>
                  <td>
                    <button type="button">Editar</button>
                    <button type="button">Excluir</button>
                  </td>
                </tr>
              );
            })}
          </thead>
        </table>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrencies: () => dispatch(getCurrencyThunk()),
  };
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
