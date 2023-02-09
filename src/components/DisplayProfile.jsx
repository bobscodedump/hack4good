import { React, useState, useEffect } from "react";

function DisplayProfile({ profileList, imgUrl, time, haveTime }) {
  const userId = localStorage.getItem("uid");

  const { name, email, mobileNumber, educationLevel } = profileList;

  // useEffect(() => {
  //   console.log(profileList);
  //   console.log(time);
  // }, [3]);

  return (
    <div>
      <div>
        <div className="flex flex-row">
          <div className="h-70 w-[700px] bg-red-200">
            <div className="mb-4">
              <img
                src={imgUrl}
                className="w-40 h-40 rounded-full ml-20 mt-10"
              />
              <h1 className="font-bold text-yellow-900 text-xl ml-28 mt-3">
                {name}
              </h1>
            </div>
          </div>
          <div
            className="flex border-t-[150px] border-t-transparent
    border-l-[1000px] border-l-red-200
    border-b-[120px] border-b-transparent relative"
          >
            <div className="absolute flex -ml-[1225px] -mt-36">
              <div className="flex flex-col ml-10 mt-10">
                <div>
                  <h1 className=" text-yellow-900">Email</h1>
                  <h1 className="text-red-600">{email}</h1>
                </div>
                <div className="mt-3">
                  <h1 className="text-yellow-900">Contact Number</h1>
                  <h1 className="text-red-600">{mobileNumber}</h1>
                </div>
                <div className="mt-3">
                  <h1 className=" text-yellow-900">Education Level</h1>
                  <h1 className="text-red-600">{educationLevel}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[400px] w-[464px] bg-mudPink">
          {haveTime ? (
            time.map((day, index) => {
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
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DisplayProfile;
