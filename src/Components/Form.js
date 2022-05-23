import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      expense: '',
    };

    this.handleChange = this.handleChange.bind(this);
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
            data-testid="method-input"
            value={ method }
            onChange={ this.handleChange }
            name="method"
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense">
          Despesa :
          <select
            data-testid="tag-input"
            value={ expense }
            onChange={ this.handleChange }
            name="expense"
          >
            <option value="food">Alimentação</option>
            <option value="fun">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps)(Form);
