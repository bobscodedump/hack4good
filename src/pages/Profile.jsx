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
        setHaveProfile(true);
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
      // console.log(time);
      // console.log(haveTime);
    } catch (err) {
      console.error(err.message);
    }
  };

  //toggle editing and display pages
  const [isEditing, setIsEditing] = useState(false);
  const toggleElements = () => {
    console.log(haveProfile);
    if (haveProfile) {
      setIsEditing(!isEditing);
    } else {
      alert("profile incomplete!");
    }
  };

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
          haveTime={haveTime}
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
              toggleElements
            }}
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;
