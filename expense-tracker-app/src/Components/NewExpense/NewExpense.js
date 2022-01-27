import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
import AddNewExpenseButton from '../Expenses/AddNewExpenseButton';

const NewExpense = (props) => {

    const [isAddNewExpenseActive, setIsAddNewExpenseActive] = useState(false);

    const saveExpenseDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsAddNewExpenseActive(false);
    }

    function AddNewExpensesClickHandler() {
        setIsAddNewExpenseActive(true);
    }

    function CancelNewExpenseHandler(){
        setIsAddNewExpenseActive(false);
    }

    return (
        <div className='new-expense'>
            {!isAddNewExpenseActive && <AddNewExpenseButton onAddNewExpenseClick={AddNewExpensesClickHandler} />}
            {isAddNewExpenseActive && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  onCancelNewExpense={CancelNewExpenseHandler}/>}
        </div>
    )
}

export default NewExpense;