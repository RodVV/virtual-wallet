import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveExpense } from '../actions/index';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      expense: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = () => {
    // const { id, value, description, currency, method, expense } = this.state;
    const { addExpense } = this.props;
    const { id } = this.state;
    addExpense(this.state);
    this.setState({
      id: (id + 1),
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      expense: 'Alimentação',
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, method, expense } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor :
          <input
            id="value"
            type="number"
            placeholder="Valor"
            data-testid="value-input"
            onChange={ this.handleChange }
            value={ value }
            name="value"
          />
        </label>
        <label htmlFor="description">
          Descrição :
          <input
            id="description"
            type="text"
            placeholder="Descrição"
            data-testid="description-input"
            onChange={ this.handleChange }
            value={ description }
            name="description"
          />
        </label>
        <label htmlFor="moeda">
          Moeda :
          <select
            id="moeda"
            value={ currency }
            data-testid="currency-input"
            name="currency"
            onChange={ this.handleChange }
          >
            { currencies.map((coin, index) => (
              <option key={ index }>{ coin }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento :
          <select
            id="method"
            data-testid="method-input"
            value={ method }
            onChange={ this.handleChange }
            name="method"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense">
          Despesa :
          <select
            id="expense"
            data-testid="tag-input"
            value={ expense }
            onChange={ this.handleChange }
            name="expense"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          type="submit"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

function mapDispatchToProps(dispatch) {
  return {
    addExpense: (state) => dispatch(saveExpense(state)),
  };
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  addExpense: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
