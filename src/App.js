//import logo from './logo.svg';
//import './App.css';
import React,{useState} from "react";
import Card from "./components/Card";
import ExpenseItem from "./components/ExpenseItem";
import   "./components/Expenses.css";
import NewExpense from './components/NewExpense';
import ExpenseFilter from "./components/ExpenseFilter";


function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const addExpenseHandler= (expense) => {
    console.log('In App.js');
    console.log(expense);
  }

  const [filteredYear,setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

  }
  return (
    
   
    
    <div>

   
     <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
     
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
   
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}>
      </ExpenseItem>
      
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}>
      </ExpenseItem>
      
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}>
      </ExpenseItem>
      
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}>
      </ExpenseItem>
    </Card>
    </div>
  );
}

export default App;
