// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {expensesAmount, balanceAmount, incomeAmount} = props

  return (
    <div className="un-ordered-list-contianer">
      <div className="list-item bg-yellow">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
            alt="balance"
            className="icon"
          />
        </div>
        <div className="money-text-container">
          <p className="money-text">Your Balance</p>
          <p className="money" testid="balanceAmount">
            RS {balanceAmount}
          </p>
        </div>
      </div>

      <div className="list-item bg-blue">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="icon"
          />
        </div>
        <div className="money-text-container">
          <p className="money-text">Your Income</p>
          <p className="money" testid="incomeAmount">
            RS {incomeAmount}
          </p>
        </div>
      </div>

      <div className="list-item bg-voilet">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="icon"
          />
        </div>
        <div className="money-text-container">
          <p className="money-text">Your Expenses</p>
          <p className="money" testid="expensesAmount">
            RS {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
