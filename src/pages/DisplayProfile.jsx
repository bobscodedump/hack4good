import { React, useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth, storage } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { ref, getDownloadURL } from "firebase/storage";

function DisplayProfile({ profileList, imgUrl }) {
  //getting current user
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //     }
  //   });
  const userId = localStorage.getItem("uid");

  //display text info
  //   const [profileList, setProfileList] = useState({});

  //   const colRef = collection(db, "profile");

  //   useEffect(() => {
  //     const getProfile = async () => {
  //       const data = await getDocs(colRef);
  //       const profiles = data.docs.map((doc) => doc.data());
  //       const temp = profiles.filter((profile) => profile.author.id === userId);
  //       console.log(temp[0].inputs);
  //       setProfileList(temp[0].inputs);
  //       console.log(userId);
  //       console.log(profileList);
  //     };
  //     getProfile();
  //     getImage();
  //   }, []);

  const { name, email, mobileNumber, educationLevel } = profileList;

  //   //   display profile pic
  //   const pathReference = ref(storage, `/${userId}/profile`);
  //   const [imgUrl, setImgUrl] = useState("");
  //   const getImage = async () => {
  //     try {
  //       getDownloadURL(pathReference).then((url) => {
  //         setImgUrl(url);
  //       });
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   };

  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{mobileNumber}</h1>
      <h1>{educationLevel}</h1>
      <img src={imgUrl} />
    </div>
  );
}

export default DisplayProfile;
