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
    <>
      <div className="flex flex-row">
        <div className="h-70 w-[700px] bg-red-200">
          <div className="mb-4">
            <img src={imgUrl} className="w-40 h-40 rounded-full ml-20 mt-10" />
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

            <div className="mt-10 text-yellow-900 ml-24 text-xl">
              <h1 className="font-bold">About me</h1>
              <p>blah blah blah blah blah blah</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[400px] w-[464px] bg-mudPink"></div>
    </>
  );
}
export default DisplayProfile;
