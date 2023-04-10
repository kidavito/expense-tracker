import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card"; // The re-use-able wrapper.

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate
        title={props.title}
        amount={props.amount}
        date={props.date}
      />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">${props.amount}</p>
      </div>
    </Card>
  );
}

export default ExpenseItem;
