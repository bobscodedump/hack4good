import { React, useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";

function DisplayProfile() {
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
    };
    getProfile();
  }, []);
  const { name, email, mobileNumber, educationLevel } = profileList;

  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{mobileNumber}</h1>
      <h1>{educationLevel}</h1>
    </div>
  );
}

export default DisplayProfile;
