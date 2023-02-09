import * as React from "react";

export default function TimePickerComponent({
  day,
  id,
  value,
  setDay,
  setTime,
  time,
  intValue,
}) {
  const handleStart = (index) => (e) => {
    console.log(time);
    const temp = [...time];
    temp[index].start = e.target.value;
    setTime(temp);
    console.log(time);
  };

  const handleEnd = (index) => (e) => {
    const temp = [...time];
    temp[index].end = e.target.value;
    setTime(temp);
    console.log(time);
  };

  return (
    <div className="flex flex-row">
      <button
        name={id}
        value={value}
        onClick={setDay}
        className="w-20 bg-gray-200 rounded-md py-2"
      >
        {day}
      </button>

      <div>
        <h2>From:</h2>
        <input name={id} type="time" onChange={handleStart(intValue)} />
        <h2>To:</h2>
        <input name={id} type="time" onChange={handleEnd(intValue)} />
      </div>
    </div>
  );
}
