import React from "react";
import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  const dropdownChangeHandler = (event) => {
    // Calling and execute "filterChangeHandler" function from "Expenses.js":
    // Lifting the "event.target.value" up to the "setFilteredYear" in the "Expenses.js":
    props.onChangeFilter(event.target.value); // Equal to "setFilteredYear(selectedYear)" in the "Expenses.js".
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
