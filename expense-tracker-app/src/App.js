import { useState } from 'react';
import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/NewExpense/NewExpense';
function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 15799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 2094.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 4550,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenseList,setExpenseList]= useState(expenses);
  
  function addExpense(addedExpense){ 
    setExpenseList((prevState)=>{
      console.log(prevState)
      return [addedExpense, ...prevState];
    })
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpense}/>
      <Expenses expenses={expenseList} />
    </div>
  );
}

export default App;
