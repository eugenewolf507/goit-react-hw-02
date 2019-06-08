import React, { Component } from 'react';
import Balance from './Balance/Balance';
import Controls from './Controls/Controls';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import styles from './Dashboard.module.css';

const shortid = require('shortid');

class Dashboard extends Component {
  state = {
    history: [],
    balance: 0,
    transaction: {
      id: '',
      type: '',
      amount: '',
      date: '',
    },
    transactionInput: '',
    income: 0,
    expense: 0,
  };

  updateInputValue = ({ target }) => {
    const { name, value } = target;
    if (value >= 0) {
      this.setState({ [name]: value });
    }
  };

  dateNew = () => {
    const date = new Date();
    const localeUk = date.toLocaleString();
    return localeUk;
  };

  transactionSetState = (name, transactionInput) => {
    this.setState({
      transaction: {
        id: shortid.generate(),
        type: name,
        amount: transactionInput,
        date: this.dateNew(),
      },
    });
  };

  historySetState = (history, name, transactionInput) => {
    this.setState({
      history: [
        ...history,
        {
          id: shortid.generate(),
          type: name,
          amount: transactionInput,
          date: this.dateNew(),
        },
      ],
    });
  };

  setBalanceIncome = transactionInput => {
    this.setState(prevState => ({
      balance: prevState.balance + Number(transactionInput),
      income: prevState.income + Number(transactionInput),
    }));
  };

  setBalanceExpense = transactionInput => {
    this.setState(prevState => ({
      balance: prevState.balance - Number(transactionInput),
      expense: prevState.expense + Number(transactionInput),
    }));
  };

  setTransaction = ({ target }) => {
    const { balance, history, transactionInput } = this.state;
    const { name } = target;

    if (name === 'deposit' && transactionInput > 0) {
      this.setBalanceIncome(transactionInput);
      this.transactionSetState(name, transactionInput);
      this.historySetState(history, name, transactionInput);
    }
    if (
      name === 'withdraw' &&
      balance >= transactionInput &&
      transactionInput > 0
    ) {
      this.setBalanceExpense(transactionInput);
      this.transactionSetState(name, transactionInput);
      this.historySetState(history, name, transactionInput);
    }
    if (name === 'withdraw' && balance < transactionInput) {
      alert('На счету недостаточно средств для проведения операции!');
    }
    if (transactionInput <= 0) {
      alert('Введите сумму для проведения операции!');
    }
  };

  render() {
    const {
      income,
      expense,
      history,
      balance,
      transaction,
      transactionInput,
    } = this.state;
    return (
      <div className={styles.dashboard}>
        <Controls
          value={transaction.amount}
          inputValue={transactionInput}
          changeInputValue={this.updateInputValue}
          deposit={this.setTransaction}
          withdraw={this.setTransaction}
        />
        <Balance
          incomeTotal={income}
          expenseTotal={expense}
          balance={balance}
        />
        <TransactionHistory transactions={history} />
      </div>
    );
  }
}

export default Dashboard;
