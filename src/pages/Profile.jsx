import { React, useState, useEffect } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db, auth, storage } from "../firebase-config";
import { ref, getDownloadURL } from "firebase/storage";
import Editing from "../components/Editing";
import DisplayProfile from "../components/DisplayProfile";

function Profile() {
  const userId = localStorage.getItem("uid");

  //get profile data from firebase
  const [profileList, setProfileList] = useState({});
  const colRef = collection(db, "profile");
  const [haveProfile, setHaveProfile] = useState(false);
  const getProfile = async () => {
    try {
      const data = await getDocs(colRef);
      const profiles = data.docs.map((doc) => doc.data());
      const temp = profiles.filter((profile) => profile.author.id === userId);
      if (temp[0] == undefined) {
        setIsEditing(true);
      }
      setProfileList(temp[0].inputs);
      console.log(userId);
      console.log(profileList);
    } catch (err) {
      console.log(haveProfile);
      console.error(err.message);
    }
  };

  //   display profile pic
  const pathReference = ref(storage, `/${userId}/profile`);
  const [imgUrl, setImgUrl] = useState("");
  const getImage = async () => {
    try {
      getDownloadURL(pathReference).then((url) => {
        setImgUrl(url);
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  //display schedule
  const [time, setTime] = useState({});
  const [haveTime, setHaveTime] = useState(false);
  const timeDoc = doc(db, "profile", `${userId}time`);
  const getTime = async () => {
    try {
      const data = await getDoc(timeDoc);
      if (time !== undefined) {
        setHaveTime(true);
      }
      setTime(data.data().time);
      console.log("HELLO");
      console.log(time);
    } catch (err) {
      console.error(err.message);
    }
  };

  //toggle editing and display pages
  const [isEditing, setIsEditing] = useState(false);

  //render data
  useEffect(() => {
    getProfile();
    getImage();
    getTime();
  }, []);

  return (
    <div>
      {isEditing ? (
        <Editing profileList={profileList} imgUrl={imgUrl} time={time} />
      ) : (
        <DisplayProfile
          profileList={profileList}
          imgUrl={imgUrl}
          time={time}
          setTime={setTime}
        />
      )}
      <div>
        {!isEditing ? (
          <button
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            Edit
          </button>
        ) : (
          <button
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            Save Changes
          </button>
        )}
      </div>
      {/* {!isEditing &&
        haveTime &&
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
        })} */}
    </div>
  );
}

export default Profile;
