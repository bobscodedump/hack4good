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
    <div className="flex flex-row mb-4 justify-center items-center mt-6">
      <p
        name={id}
        value={value}
        onClick={setDay}
        className="w-20 bg-gray-200 rounded-lg py-4 text-center mr-2 pb-5"
      >
        {day}
      </p>

      <div className="flex flex-row gap-2">
        <div className="bg-gray-100 rounded-md px-2 py-1">
          <h2>From:</h2>
          <input
            name={id}
            type="time"
            onChange={handleStart(intValue)}
            className="rounded "
          />
        </div>
        <div className="bg-gray-100 rounded-md px-2 py-1">
          <h2>To:</h2>
          <input
            name={id}
            type="time"
            onChange={handleEnd(intValue)}
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
}
