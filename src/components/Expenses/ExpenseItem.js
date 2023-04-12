import React from "react";
import ExpenseDate from "./ExpenseDate"; // Child component.
import Card from "../UI/Card"; // The re-use-able wrapper.
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate
          date={props.date} // props.
        />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <p className="expense-item__price">${props.amount}</p>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
