import { React, useState, useEffect } from "react";

export default function TimePickerComponent({
  day,
  id,
  setDay,
  setTime,
  currTime,
  intValue,
  value,
}) {
  // const [time, changeTime] = useState(currTime);
  // useEffect(() => {
  //   changeTime(currTime);
  // });
  const time = currTime;
  const handleStart = (index) => (e) => {
    const temp = [...time];
    temp[index].start = e.target.value;
    setTime(temp);
  };

  const handleEnd = (index) => (e) => {
    const temp = [...time];
    temp[index].end = e.target.value;
    setTime(temp);
  };

  return (
    <div className="flex flex-row">
      <button
        name={id}
        onClick={setDay}
        className="w-20 bg-gray-200 rounded-md py-2"
      >
        {day}
      </button>

      <div>
        <h2>From:</h2>
        <input
          name={id}
          value={value.start}
          type="time"
          onChange={handleStart(intValue)}
        />
        <h2>To:</h2>
        <input
          name={id}
          value={value.end}
          type="time"
          onChange={handleEnd(intValue)}
        />
      </div>
    </div>
  );
}
