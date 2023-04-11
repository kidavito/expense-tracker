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
        <ExpenseItem
          title={props.items[0].title} // props.
          amount={props.items[0].amount} // props.
          date={props.items[0].date} // props.
        />
        <ExpenseItem
          title={props.items[1].title} // props.
          amount={props.items[1].amount} // props.
          date={props.items[1].date} // props.
        />
        <ExpenseItem
          title={props.items[2].title} // props.
          amount={props.items[2].amount} // props.
          date={props.items[2].date} // props.
        />
      </Card>
    </div>
  );
}

export default Expenses;
