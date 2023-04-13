import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm"; // Child component.

function NewExpense(props) {
  // State for "Add Expense" form:
  const [isEditing, setIsEditing] = useState(false); // Initially "false".

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

  // For "Add New Expense" button, enables the editing mode:
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  // For "Cancel" button in the "ExpenseForm.js", disable the editing mode:
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && ( // If "isEditing" is "false".
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && ( // If "isEditing" is "true".
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler} // props.
          onCancel={stopEditingHandler} // props (For "Cancel" button).
        />
      )}
    </div>
  );
}

export default NewExpense;
