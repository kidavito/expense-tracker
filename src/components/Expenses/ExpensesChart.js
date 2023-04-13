import React from "react";
import Chart from "../Chart/Chart"; // Child
// Tree Structure: ExpensesChart.js > Chart.js > ChartBar.js.

function ExpensesChart(props) {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // For loop:
  for (const expense of props.expenses) {
    // Note: array should use "of", object should use "in" loop.
    const expenseMonth = expense.date.getMonth(); // Starting at 0, Jan = 0.
    // Attach every elements in the "chartDataPoints" array to the "expenseMonth":
    chartDataPoints[expenseMonth].value += expense.amount; // Increase the value of given month.
  }

  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;
