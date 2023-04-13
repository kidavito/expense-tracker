import React from "react";
import ChartBar from "./ChartBar"; // Child
import "./Chart.css";

function Chart(props) {
  // Get "dataPoints" from "ExpenseChart.js":
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // Should be 12 values based on 12 months.
  // Get the max month:
  const totalMaximum = Math.max(...dataPointValues); // Get the max value from the entire elements of the "dataPointValues" array.
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} // props.
          value={dataPoint.value} // props.
          maxValue={totalMaximum} // props.
          label={dataPoint.label} // props.
        />
      ))}
    </div>
  );
}

export default Chart;
