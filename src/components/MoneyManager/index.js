import './index.css'

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    balanceAmount: 0,
    incomeAmount: 0,
    expensesAmount: 0,
    historyList: [],
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeSelectAmountType = event => {
    this.setState({optionId: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state

    const amount = parseInt(amountInput)

    if (optionId === 'INCOME') {
      this.setState(prevState => ({
        incomeAmount: prevState.incomeAmount + amount,
        balanceAmount: prevState.balanceAmount + amount,
      }))
    } else {
      this.setState(prevState => ({
        expensesAmount: prevState.expensesAmount + amount,
        balanceAmount: prevState.balanceAmount - amount,
      }))
    }

    const filteredId = transactionTypeOptions.filter(
      item => item.optionId === optionId,
    )
    const text = filteredId[0].displayText

    const newHistoryItem = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
      type: text,
      category: optionId,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistoryItem],
      titleInput: '',
      amountInput: '',
    }))
  }

  deleteTransaction = id => {
    const {historyList} = this.state
    const result = [...historyList]

    const item = result.filter(eachItem => eachItem.id === id)[0]

    const money = parseInt(item.amount)

    if (item.category === 'EXPENSES') {
      this.setState(prevState => ({
        expensesAmount: prevState.expensesAmount - money,
        balanceAmount: prevState.balanceAmount + money,
      }))
    } else {
      this.setState(prevState => ({
        incomeAmount: prevState.incomeAmount - money,
        balanceAmount: prevState.balanceAmount - money,
      }))
    }

    this.setState(prevState => ({
      historyList: prevState.historyList.filter(eachItem => eachItem.id !== id),
    }))
  }

  render() {
    const {
      optionId,
      titleInput,
      amountInput,
      historyList,
      incomeAmount,
      expensesAmount,
      balanceAmount,
    } = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <div className="user-name-container">
            <h1 className="user-name">Hi, Richard</h1>
            <p className="welcome-description">
              Welcome back to your <span className="span">Money Manager</span>
            </p>
          </div>

          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />

          <div className="transaction-and-history-container">
            <form className="form-container">
              <h1 className="heading">Add Transaction</h1>
              <div className="label-and-input-container">
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="TITLE"
                  className="input"
                  onChange={this.onChangeTitleInput}
                  value={titleInput}
                />
              </div>
              <div className="label-and-input-container">
                <label htmlFor="amount" className="label">
                  AMOUNT
                </label>
                <input
                  type="text"
                  id="amount"
                  placeholder="AMOUNT"
                  className="input"
                  onChange={this.onChangeAmountInput}
                  value={amountInput}
                />
              </div>
              <div className="label-and-input-container">
                <label htmlFor="type" className="label">
                  TYPE
                </label>
                <select
                  id="type"
                  className="input"
                  onChange={this.onChangeSelectAmountType}
                  value={optionId}
                >
                  <option value="INCOME">Income</option>
                  <option value="EXPENSES">Expenses</option>
                </select>
              </div>

              <button
                className="add-button"
                type="submit"
                onClick={this.addTransaction}
              >
                Add
              </button>
            </form>

            <ul className="history-container">
              <h1 className="history-text">History</h1>
              <li className="list-table">
                <p className="title-text">Title</p>
                <p className="amount-text">Amount</p>
                <p className="type-text">Type</p>
              </li>
              <ul className="unorder-order-list">
                {historyList.map(eachTransaction => (
                  <TransactionItem
                    transactionDetails={eachTransaction}
                    key={eachTransaction.id}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
