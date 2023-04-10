import React from "react";
// Tree Structure: Expenses.js > ExpenseItem.js > ExpenseDate.js:
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
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

  // Render HTML using React object (without JSX):
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Expense Tracker!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  // Render HTML using JSX:
  return (
    <div>
      <h1>Expense Tracker!</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
