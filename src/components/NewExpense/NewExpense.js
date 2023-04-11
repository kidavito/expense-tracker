import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  // Function to pass through the "onSaveExpenseData":
  // This function will be executed on "ExpenseForm.js" using props:
  // Tree Structure: App.js > NewExpense.js > ExpenseForm.js.
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // Get data from "ExpenseForm" > "submitHandler" > "expenseData":
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // Using value from "Math.random()" as an unique id.
    };
    // Calling and execute "onAddExpense()" from "App.js":
    props.onAddExpense(expenseData); // Make the function using "expenseData".
  };
  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler} // props.
      />
    </div>
  );
}

export default NewExpense;
