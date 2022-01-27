import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses found</h2>;
    }


    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    expenseTitle={expense.title}
                    expenseDate={expense.date}
                    expenseAmount={expense.amount} />
            )
            )}
        </ul>
    )
}

export default ExpensesList;