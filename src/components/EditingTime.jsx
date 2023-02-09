import { React, useState, useEffect } from "react";
import { setDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth, storage } from "../firebase-config";
import dayjs from "dayjs";
import { TimePicker } from "antd";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import TimePickerComponent from "./TimePickerComponent";

function EditingTime({ time }) {
  //time picker
  const format = "HH:mm";
  //dates chosen
  //   const [days, setDays] = useState({
  //     m: false,
  //     t: false,
  //     w: false,
  //     th: false,
  //     f: false,
  //     s: false,
  //     su: false,
  //   });
  const [days, setDays] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  //set date to true/false
  //   const setDay = (e) => {
  //     let temp;
  //     if (e.target.value == "false") {
  //       temp = true;
  //     } else {
  //       temp = false;
  //     }
  //     setDays((prevState) => ({
  //       ...prevState,
  //       [e.target.name]: temp,
  //     }));
  //   };
  const setDay = (index) => (e) => {
    const temp = [...days];
    let bool;
    if (e.target.value == "false") {
      bool = true;
    } else {
      bool = false;
    }
    temp[index] = bool;
    setDays(temp);
    // console.log(days);
  };

  //time info
  //   const [time, setTime] = useState({
  //     m: { start: "", end: "" },
  //     t: { start: "", end: "" },
  //     w: { start: "", end: "" },
  //     th: { start: "", end: "" },
  //     f: { start: "", end: "" },
  //     s: { start: "", end: "" },
  //     su: { start: "", end: "" },
  //   });
  const [time, setTime] = useState([
    { start: "", end: "" },
    { start: "", end: "" },
    { start: "", end: "" },
    { start: "", end: "" },
    { start: "", end: "" },
    { start: "", end: "" },
    { start: "", end: "" },
  ]);

  //form validation
  //   let formIsValid = true;
  //   const handleForm = () => {
  //     for (var day in time) {
  //       if (days[day]) {
  //         console.log(time[day].start);
  //         if (time[day].start == "" || time[day].end == "") {
  //           return false;
  //         }
  //       }
  //     }
  //     return true;
  //   };

  let formIsValid = true;
  const handleForm = () => {
    for (var i = 0; i < 7; i++) {
      if (days[i]) {
        if (time[i].start == "" || time[i].end == "") {
          return false;
        }
      }
    }
    return true;
  };

  //passing time info to firebase
  const userId = localStorage.getItem("uid");
  const timeDoc = doc(db, "profile", `${userId}time`);

  //submiting form, passing data to firebase
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      if (handleForm()) {
        await deleteDoc(timeDoc);
        await setDoc(timeDoc, {
          author: {
            name: auth.currentUser.displayName,
            id: userId,
          },
          time,
        });
        alert("Timeslots updated!");
      } else {
        alert("Please fill in the timeslots");
      }
      //   console.log(days);

      //   window.location.pathname = "/profile";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div id="timeslot input area">
      <div>
        <section>
          <TimePickerComponent
            id="m"
            day="M"
            // value={days.m}
            value={days[0]}
            setDay={setDay(0)}
            setTime={setTime}
            time={time}
            intValue={0}
          />
          <TimePickerComponent
            id="t"
            day="T"
            // value={days.t}
            value={days[1]}
            setDay={setDay(1)}
            setTime={setTime}
            time={time}
            intValue={1}
          />
          <TimePickerComponent
            id="w"
            day="W"
            // value={days.w}
            value={days[2]}
            setDay={setDay(2)}
            setTime={setTime}
            time={time}
            intValue={2}
          />
          <TimePickerComponent
            id="th"
            day="Th"
            // value={days.th}
            value={days[3]}
            setDay={setDay(3)}
            setTime={setTime}
            time={time}
            intValue={3}
          />
          <TimePickerComponent
            id="f"
            day="F"
            // value={days.f}
            value={days[4]}
            setDay={setDay(4)}
            setTime={setTime}
            time={time}
            intValue={4}
          />
          <TimePickerComponent
            id="s"
            day="S"
            // value={days.s}
            value={days[5]}
            setDay={setDay(5)}
            setTime={setTime}
            time={time}
            intValue={5}
          />
          <TimePickerComponent
            id="su"
            day="Su"
            // value={days.su}
            value={days[6]}
            setDay={setDay(6)}
            setTime={setTime}
            time={time}
            intValue={6}
          />
        </section>
        <div>
          <button onClick={submitForm}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default EditingTime;
