import React from "react";
import TimeBar from "../components/TimeBar";

function Resumes({ imgUrl, profileList, time }) {
  const { name, email, mobileNumber, educationLevel } = profileList;
  return (
    <div>
      <div>
        <img src={imgUrl} />
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{mobileNumber}</h1>
        <h1>{educationLevel}</h1>
        {time.map((day, index) => {
          if (day.start !== "" && day.end !== "") {
            let whichDay;

            switch (index) {
              case 0:
                whichDay = "Monday";
                break;
              case 1:
                whichDay = "Tuesday";
                break;
              case 2:
                whichDay = "Wednesday";
                break;
              case 3:
                whichDay = "Thursday";
                break;
              case 4:
                whichDay = "Friday";
                break;
              case 5:
                whichDay = "Saturday";
                break;
              case 6:
                whichDay = "Sunday";
                break;
            }
            return (
              <div className="bg-red-200 pb-1">
                <p className="text-xl font-bold py-4 underline ml-4">
                  {whichDay}
                </p>
                <TimeBar startTime={day.start} endTime={day.end} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Resumes;
