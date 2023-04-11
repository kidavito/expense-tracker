import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem"; // Child component.
import Card from "../UI/Card"; // The re-use-able wrapper, also a child component.
import ExpensesFilter from "./ExpensesFilter"; // Child component.
import "./Expenses.css";

function Expenses(props) {
  // Filtered year state:
  const [filteredYear, setFilteredYear] = useState("2023");

  // This function will be passed to "ExpenseFilter.js":
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Filtering by the year:
  const filteredExpenses = props.items.filter((expense) => {
    // Retrive all data from "props.items" (Originally App.js > DUMMY_EXPENSES):
    // Get "date" from "props.items" in "year" format using "getFullYear" method and convert it to "string":
    // Then compared the converted string to the value of "filteredYear":
    return expense.date.getFullYear().toString() === filteredYear; // Return boolean value (true/false).
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear} // props.
          onChangeFilter={filterChangeHandler} // props.
        />
        {filteredExpenses.map((expense) => (
          // If the "filteredExpenses" return boolean "true", then render the "ExpenseItem" component(s):
          // The retrieve the data from "props.items" which happened inside the "filteredExpenses" function and pass it into "ExpenseItem" component for each array element/object:
          <ExpenseItem
            key={expense.id} // Props, it's recommended to provide and use unique "id" in the array instead of using "index".
            title={expense.title} // Props.
            amount={expense.amount} // Props.
            date={expense.date} // Props.
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
