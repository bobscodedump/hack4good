import { React, useState, useEffect } from "react";
import { setDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth, storage } from "../firebase-config";
import TimePickerComponent from "./TimePickerComponent";

function EditingTime({ currTime, setTime }) {
  //time picker
  const format = "HH:mm";

  //dates chosen
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

  //   const [time, setTime] = useState([
  //     { start: "", end: "" },
  //     { start: "", end: "" },
  //     { start: "", end: "" },
  //     { start: "", end: "" },
  //     { start: "", end: "" },
  //     { start: "", end: "" },
  //     { start: "", end: "" },
  //   ]);
  //   const [time, setTime] = useState(currTime);

  //form validation
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
    } catch (err) {
      console.error(err.message);
    }
  };

  //   useEffect(() => {
  //     setTime(currTime);
  //     // if (!currTime == undefined) {
  //     //   setTime(currTime);
  //     //   console.log("ALLAHU AKBAR");
  //     // }
  //   }, []);

  return (
    <div id="timeslot input area">
      <div>
        <section>
          <h1 className="text-center font-bold text-2xl">
            Present Kidney Dialysis Schedule
          </h1>
          <TimePickerComponent
            id="m"
            day="Monday"
            setTime={setTime}
            currTime={currTime}
            intValue={0}
            value={currTime[0]}
          />
          <TimePickerComponent
            id="t"
            day="Tuesday"
            setTime={setTime}
            currTime={currTime}
            intValue={1}
            value={currTime[1]}
          />
          <TimePickerComponent
            id="w"
            day="Wednesday"
            setTime={setTime}
            currTime={currTime}
            intValue={2}
            value={currTime[2]}
          />
          <TimePickerComponent
            id="th"
            day="Thursday"
            setTime={setTime}
            currTime={currTime}
            intValue={3}
            value={currTime[3]}
          />
          <TimePickerComponent
            id="f"
            day="Friday"
            setTime={setTime}
            currTime={currTime}
            intValue={4}
            value={currTime[4]}
          />
          <TimePickerComponent
            id="s"
            day="Saturday"
            setTime={setTime}
            currTime={currTime}
            intValue={5}
            value={currTime[5]}
          />
          <TimePickerComponent
            id="su"
            day="Sunday"
            setTime={setTime}
            currTime={currTime}
            intValue={6}
            value={currTime[6]}
          />
        </section>
        <div>
          <button
            onClick={submitForm}
            className="bg-pink-200 px-4 py-2 rounded-md"
          >
            Confirm dialysis schedule
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditingTime;
