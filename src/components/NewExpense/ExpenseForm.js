import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // Individual "useState":
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Grouped "useState" using "object":
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    // [WAY-1] Updating the value of individual "useState":
    setEnteredTitle(event.target.value);

    // [WAY-2] Updating the value of grouped "useState" (Not the best practice):
    // setUserInput({
    //   ...userInput, // Obtaining all object properties first to prevent loss of (un-mentioned) properties.
    //   enteredTitle: event.target.value, // Updating the "enteredTitle" object property.
    // });

    // [WAY-3] Updating the value of grouped "useState" (Recommended):
    // setUserInput((prevState) => {
    //   // Using "prevState" will guarantee that you'll get the latest state.
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    // [WAY-1] Updating the value of individual "useState":
    setEnteredAmount(event.target.value);

    // [WAY-2] Updating the value of grouped "useState" (Not the best practice):
    // setUserInput({
    //   ...userInput, // Obtaining all object properties first to prevent loss of (un-mentioned) properties.
    //   enteredAmount: event.target.value, // Updating the "enteredTitle" object property.
    // });

    // [WAY-3] Updating the value of grouped "useState" (Recommended):
    // setUserInput((prevState) => {
    //   // Using "prevState" will guarantee that you'll get the latest state.
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    // [WAY-1] Updating the value of individual "useState":
    setEnteredDate(event.target.value);

    // [WAY-2] Updating the value of grouped "useState" (Not the best practice):
    // setUserInput({
    //   ...userInput, // Obtaining all object properties first to prevent loss of (un-mentioned) properties.
    //   enteredDate: event.target.value, // Updating the "enteredTitle" object property.
    // });

    // [WAY-3] Updating the value of grouped "useState" (Recommended):
    // setUserInput((prevState) => {
    //   // Using "prevState" will guarantee that you'll get the latest state.
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Preventing the page from reloading automatically after submit.

    // Set "expenseData" object properties:
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, // Forcing the input value to number format instead of string by default.
      date: new Date(enteredDate),
    };

    // Calling and execute "onSaveExpenseData()" from "NewExpense.js":
    // Tree Structure: App.js > NewExpense.js > ExpenseForm.js.
    props.onSaveExpenseData(expenseData); // Make the function using "expenseData".

    // Reset/empty the form fields after submitting:
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

// Note: using "value" and "onChange" in the input form and binding it with "useState" is called "Two-Way Binding".

export default ExpenseForm;
