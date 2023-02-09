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
  // const handleStart = (e) => {
  //   const eid = e.target.name;
  //   console.log(eid);
  //   // console.log(e.target.name.start);
  //   setTime({
  //     ...time,
  //     [eid]: {
  //       ...time[eid],
  //       start: e.target.value,
  //     },
  //   });
  //   console.log(time);
  // };
  const handleStart = (index) => (e) => {
    const temp = [...time];
    temp[index].start = e.target.value;
    setTime(temp);
    console.log(time);
  };

  // const handleEnd = (e) => {
  //   const eid = e.target.name;
  //   console.log(time[eid]);
  //   // console.log(e.target.name.start);
  //   setTime({
  //     ...time,
  //     [eid]: {
  //       ...time[eid],
  //       end: e.target.value,
  //     },
  //   });
  //   console.log(time);
  // };
  const handleEnd = (index) => (e) => {
    const temp = [...time];
    temp[index].end = e.target.value;
    setTime(temp);
    console.log(time);
  };

  return (
    <div>
      <button name={id} value={value} onClick={setDay}>
        {day}
      </button>
      {value && (
        <div>
          <h2>From:</h2>
          <input name={id} type="time" onChange={handleStart(intValue)} />
          <h2>To:</h2>
          <input name={id} type="time" onChange={handleEnd(intValue)} />
        </div>
      )}
    </div>
  );
}
