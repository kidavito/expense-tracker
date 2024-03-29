import React, { useState } from "react";

// [INPUT FORM] Tree Structure: NewExpense.js > ExpenseForm.js:
import NewExpense from "./components/NewExpense/NewExpense"; // Child component.

// [OUTPUT DISPLAY] Tree Structure: Expenses.js > ExpensesList.js > ExpenseItem.js > ExpenseDate.js:
import Expenses from "./components/Expenses/Expenses"; // Child component.

// Initial data:
const DUMMY_EXPENSES = [
  // Array, to store multiple elements (items).
  {
    id: "e1",
    title: "Expense 1",
    amount: 100.0,
    date: new Date(2023, 3, 11),
  }, // [0]
  {
    id: "e2",
    title: "Expense 2",
    amount: 200.0,
    date: new Date(2023, 3, 11),
  }, // [1]
  {
    id: "e3",
    title: "Expense 3",
    amount: 300.0,
    date: new Date(2023, 3, 11),
  }, // [2]
  // Note: The month and day are using array format from "Date()" which starts counting from 0, so "2023, 3, 11" means "2023, April 10".
];

function App() {
  // Expenses data:
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // Function to pass through the "onAddExpense":
  // This function will be executed on "NewExpense.js" using props:
  // Tree Structure: App.js > NewExpense.js > ExpenseForm.js.
  const addExpenseHandler = (expense) => {
    // Add new "expense" + retrieve keep the previous "expenses" into "setExpenses" new array:
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; // New array, new "expense" and "prevExpense" added.
    });
  };

  // Render HTML using React object (without JSX):
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Expense Tracker!"),
  //   React.createElement(NewExpense, { onAddExpense: addExpenseHandler }),
  //   React.createElement(Expenses, { items: expenses })
  // );

  // Render HTML using JSX:
  return (
    <div>
      <NewExpense
        onAddExpense={addExpenseHandler} // props.
      />
      <Expenses
        items={expenses} // props.
      />
    </div>
  );
}

export default App;
