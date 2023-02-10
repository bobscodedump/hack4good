import React from "react";

const TimeBar = ({ startTime, endTime }) => {
  const start = new Date(`1970-01-01 ${startTime}:00`);
  const end = new Date(`1970-01-01 ${endTime}:00`);
  const duration = end - start;
  const percentage = (duration / (24 * 60 * 60 * 1000)) * 100;

  const timeBarStyle = {
    backgroundColor: "lightred",
    height: "20px",
    width: `${percentage}%`,
    display: "inline-block",
    borderRadius: "2px",

    marginBottom: "5px",
  };

  const indexStyle = {
    position: "relative",
    height: "20px",
    width: "100%",
    display: "inline-block",
    marginTop: "5px",
    marginBottom: "5px",
  };

  const indexMarkerStyle = {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    width: "1px",
    backgroundColor: "gray",
  };

  const labelStyle = {
    position: "absolute",
    top: "30px",
    left: "0",
    width: "100%",
    textAlign: "center",
  };

  return (
    <div style={indexStyle} className="mb-20">
      <div style={timeBarStyle}></div>
      {[
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24,
      ].map((hour) => (
        <div
          key={hour}
          style={{ ...indexMarkerStyle, left: `${(hour / 24) * 100}%` }}
        ></div>
      ))}
      <div style={labelStyle}>
        {startTime} - {endTime}
      </div>
    </div>
  );
};

export default TimeBar;
