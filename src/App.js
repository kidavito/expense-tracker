import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    // Array, to store multiple elements (items).
    {
      id: "e1",
      title: "Expense 1",
      amount: 100.0,
      date: new Date(2023, 3, 11),
    }, // [0]
    {
      id: "e2",
      title: "Expense 2",
      amount: 200.0,
      date: new Date(2023, 3, 11),
    }, // [1]
    {
      id: "e3",
      title: "Expense 3",
      amount: 300.0,
      date: new Date(2023, 3, 11),
    }, // [2]
    // Note: The month and day are using array format from "Date()" which starts counting from 0, so "2023, 3, 11" means "2023, April 10".
  ];
  return (
    <div>
      <h1>Expense Tracker!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
