import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 93.54,
    date: new Date(2020, 2, 24),
  },
  {
    id: "e2",
    title: "Sky snake",
    amount: 234.54,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e3",
    title: "Animal",
    amount: 152.41,
    date: new Date(2021, 8, 12),
  },
  {
    id: "e4",
    title: "New planet",
    amount: 234.54,
    date: new Date(2021, 2, 28),
  },
];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
