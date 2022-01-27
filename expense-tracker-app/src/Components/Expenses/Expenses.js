import { useState } from 'react';
import './Expenses.css'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFIlter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [filterYear, setFilterYear] = useState('2021');
    function FilterYearChange(year) {
        console.log(year);
        setFilterYear(year);
    }

    const filteredExpense = props.expenses.filter((exp) => {
        return (new Date(exp.date).getFullYear().toString() === filterYear)
    })



    return (
        <div >
            <Card className='expenses'>
                <ExpenseFilter selected={filterYear} onYearChange={FilterYearChange} />
                <ExpensesChart expenses={filteredExpense}/>
                <ExpensesList items={filteredExpense} />
            </Card>
        </div>
    )
}

export default Expenses;