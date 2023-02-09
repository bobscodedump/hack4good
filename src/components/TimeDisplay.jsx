import React from "react";

function TimeDisplay({ day, time }) {
  return (
    <div>
      <p>{day}</p>
      <p>{time}</p>
    </div>
  );
}

export default TimeDisplay;
