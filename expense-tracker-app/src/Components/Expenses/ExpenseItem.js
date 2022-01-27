import Card from '../UI/Card';
import './ExpenseItem.css';


function ExpenseItem(props) {

    return (
        <li>
            <Card className="expense-item" >
                <div className='expense-date'>
                    <div className='expense-date__month'>{props.expenseDate.toLocaleString('en-IN', { month: 'long' })}</div>
                    <div className='expense-date__year'>{props.expenseDate.getFullYear()}</div>
                    <div className='expense-date__day'>{props.expenseDate.toLocaleString('en-IN', { day: '2-digit' })}</div>
                </div>
                <div className="expense-item__description">
                    <h2>{props.expenseTitle}</h2>
                    <div className="expense-item__price">&#8377; {props.expenseAmount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;