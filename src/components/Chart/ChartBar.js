import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  // Initial bar fill:
  let barFillHeight = "0%";

  // Updated bar fill:
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%"; // Based on scale of 100.
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }} // Dynamic CSS based on "barFillHeight".
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
