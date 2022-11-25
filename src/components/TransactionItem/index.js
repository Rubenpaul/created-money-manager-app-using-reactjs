// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="list-table1">
      <p className="title-text1">{title}</p>
      <p className="amount-text1">{amount}</p>
      <p className="type-text1 ">{type}</p>
      <button
        className="delete-btn"
        type="button"
        onClick={onDeleteTransaction}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default TransactionItem
