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
  const [time, changeTime] = useState(currTime);
  useEffect(() => {
    console.log("YOUR MOTHER FUCKING DIE");
  });
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
    <div className="flex flex-row mb-4 justify-center items-center mt-6">
      <p
        name={id}
        onClick={setDay}
        className="w-36 bg-gray-200 rounded-lg py-4 text-center mr-2 pb-5"
      >
        {day}
      </p>

      <div className="flex flex-row gap-2">
        <div className="bg-gray-100 rounded-md px-2 py-1 w-80">
          <h2>From:</h2>
          <input
            name={id}
            type="time"
            onChange={handleStart(intValue)}
            className="rounded w-[300px]"
          />
        </div>
        <div className="bg-gray-100 rounded-md px-2 py-1 w-80">
          <h2>To:</h2>
          <input
            name={id}
            type="time"
            onChange={handleEnd(intValue)}
            className="rounded w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}
