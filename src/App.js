import React from 'react';
import './App.css';
import Header  from './components/header';
import Balance from './components/balance';
import IncomeExpense from './components/incomeExpense';
import TransactionList from './components/transactionList';
import AddTransaction from './components/addTransaction'
function App() {
  return (
    <div className="App">
     <Header/>
     <div className="container">
       <Balance/>
       <IncomeExpense/>
       <TransactionList/>
       <AddTransaction/>
     </div>
    </div>
  );
}

export default App;
