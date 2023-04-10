import "./Card.css";

// This "Card.js" act as a re-use-able wrapper.

function Card(props) {
  // For using self class styling + retrieve class styling from parent:
  // Note: "card " must contain space to separate the self class and parent class.
  const classes = "card " + props.className; // It becomes having 2 classes, "card +props.className".
  // If the parent is from "ExpenseItem.js", then the classes become "card expense-item".
  // If the parent is from "Expense.js", then the classes become "card expenses".

  // "children" is a reserved name, no need to setup children value, it will inherit all contents from the parent component automatically.
  return <div className={classes}>{props.children}</div>;
}

export default Card;
