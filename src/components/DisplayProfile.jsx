import { React, useState, useEffect } from "react";

function DisplayProfile({ profileList, imgUrl, time, haveTime }) {
  const userId = localStorage.getItem("uid");

  const { name, email, mobileNumber, educationLevel } = profileList;

  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{mobileNumber}</h1>
      <h1>{educationLevel}</h1>
      <img src={imgUrl} className="max-w-sm max-h-sm" />
      {haveTime &&
        time.map((day, index) => {
          console.log(index);
          if (day.start !== "" && day.end !== "") {
            let whichDay;
            switch (index) {
              case 0:
                whichDay = "M";
                break;
              case 1:
                whichDay = "T";
                break;
              case 2:
                whichDay = "W";
                break;
              case 3:
                whichDay = "Th";
                break;
              case 4:
                whichDay = "F";
                break;
              case 5:
                whichDay = "S";
                break;
              case 6:
                whichDay = "Su";
                break;
            }
            return (
              <div>
                <p>{whichDay}</p>
                <p>{day.start}</p>
                <p>{day.end}</p>
              </div>
            );
          }
        })}
    </div>
  );
}

export default DisplayProfile;
