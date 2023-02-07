import { React, useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth, storage } from "../firebase-config";
import { ref, getDownloadURL } from "firebase/storage";

function DisplayProfile() {
  //display text info
  const [profileList, setProfileList] = useState({});

  const colRef = collection(db, "profile");

  useEffect(() => {
    const getProfile = async () => {
      const data = await getDocs(colRef);
      const profiles = data.docs.map((doc) => doc.data());
      const temp = profiles.filter(
        (profile) => profile.author.id === auth.currentUser.uid
      );
      setProfileList(temp[0].inputs);
      console.log(auth.currentUser.uid);
    };
    getProfile();
    // getImage();
  }, []);

  const { name, email, mobileNumber, educationLevel } = profileList;

  //display profile pic
  //   const userId = auth.currentUser.uid;
  //   const pathReference = ref(storage, `/${userId}/000016.JPG`);
  //   const [imgUrl, setImgUrl] = useState("");
  //   const getImage = async () => {
  //     try {
  //       getDownloadURL(pathReference).then((url) => {
  //         // const img = document.getElementById('myimg');
  //         // img.setAttribute('src', url);
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
      {/* <img src={imgUrl} /> */}
    </div>
  );
}

export default DisplayProfile;
