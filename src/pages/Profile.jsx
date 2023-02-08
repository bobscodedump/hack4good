import { React, useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth, storage } from "../firebase-config";
import { ref, getDownloadURL } from "firebase/storage";
import Editing from "./Editing";
import DisplayProfile from "./DisplayProfile";

function Profile() {
  //taking in profile data
  const userId = localStorage.getItem("uid");

  const [profileList, setProfileList] = useState({});

  const colRef = collection(db, "profile");

  const [haveProfile, setHaveProfile] = useState(false);

  useEffect(() => {
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
    getProfile();
    getImage();
  }, []);

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

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {isEditing ? (
        <Editing profileList={profileList} imgUrl={imgUrl} />
      ) : (
        <DisplayProfile profileList={profileList} imgUrl={imgUrl} />
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
    </div>
  );
}

export default Profile;
