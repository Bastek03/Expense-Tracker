import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Balance from '../components/Balance/Balance';
import style from './App.module.css';
import History from '../components/History/History';

class App extends Component {

  state = {
    income: 0,
    expense: 0,
    balance: 0,
    message: '',
    inputAmount: '',
    id: 0,
    style: ''
  }

  render(){

    const clearDataFromInput = (input1, input2) => {
      document.getElementById(input1).value = '';
      document.getElementById(input2).value = '';
    }

    const transactionDataHandler = () => {
      let text = document.getElementById('text').value;
      let amount = document.getElementById('amount').value;
      let id = this.state.id;

      if(amount[0] === '+') {

        if (text  === '') text = 'Income';

        let tempam = amount;
        amount = amount.substring(1);
        amount = +amount;
        let income = this.state.income;
        let res = amount+income;
        let balance = this.state.balance;

        this.setState({
          income: res,
          balance: balance+amount,
          message: text,
          id: id += 1,
          inputAmount: tempam,
          style: "green"
        })

        clearDataFromInput('text', 'amount');

      } else if (amount[0] === '-') {

        if (text  === '') text = 'Expense';

        let tempam = amount;
        amount = amount.substring(1);
        amount = +amount;
        let expense = this.state.expense;
        let balance = this.state.balance;
        let res = expense+amount;

        this.setState({
          expense: res,
          balance: balance - amount,
          message: text,
          id: id += 1,
          inputAmount: tempam,
          style: "red"
        })

        clearDataFromInput('text', 'amount');

      }

    }

    return (

      <div className={style.App}>
  
        <Header/>
  
  
        <Balance income={this.state.income} expense={this.state.expense} balance={this.state.balance}></Balance>

        {this.state.inputAmount !== '' ? 
          <History 
            style={this.state.style} 
            message={this.state.message} 
            amount={this.state.inputAmount} 
            id={this.state.id}
          /> : null
        }


        <div className={style.container}>
  
          <h3>Add new transaction</h3>
          <hr></hr>
  
          <h3>Text</h3>
          <input type='text' className={style.input} id="text" placeholder="Enter text..."></input>
  
          <h3 style={{marginBottom: 0}}>Amount</h3>
          <p style={{marginTop: '5px'}}>(Negative - expense / Positive + income)</p>
          <input type='text' className={style.input} id="amount" placeholder="Enter amount..."></input>
  
          <button className={style.button} onClick={transactionDataHandler}>Add transaction</button>
        </div>
  
  
      </div>
    );
  }
}

export default App;
