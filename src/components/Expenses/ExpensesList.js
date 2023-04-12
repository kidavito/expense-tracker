import React from "react";
import ExpenseItem from "./ExpenseItem"; // Child.
import "./ExpensesList.css";

function ExpensesList(props) {
  // If "props.items" value is empty (=== 0), then render this <h2>:
  if (props.items.length === 0) {
    // If the boolean above return "true", then:
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  // Otherwise, if the boolean above return "false", then render these:
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        // The retrieve the data from "props.items" which happened inside the "filteredExpenses" function inside the "Expenses.js" and pass it into "ExpenseItem" component for each array element/object:
        <ExpenseItem
          key={expense.id} // Props, it's recommended to provide and use unique "id" in the array instead of using "index".
          title={expense.title} // Props.
          amount={expense.amount} // Props.
          date={expense.date} // Props.
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
