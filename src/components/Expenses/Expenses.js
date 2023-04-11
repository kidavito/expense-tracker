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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear} // props.
          onChangeFilter={filterChangeHandler} // props.
        />
        {props.items.map((expense) => (
          // Retrieve the data from "props.items" and pass it into "ExpenseItem" component for each array element/object:
          <ExpenseItem
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
