import { React, useState, useEffect, useMemo, useLayoutEffect } from "react";
import TimeBar from "../components/TimeBar";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  collectionGroup,
} from "firebase/firestore";
import { db, storage } from "../firebase-config";
import { getDownloadURL, ref } from "firebase/storage";

function Resumes({}) {
  //   const [tempData, setTempData] = useState([]);
  const [resumeData, setResumeData] = useState([]);
  //   async function takeData() {
  //     const colRef = collection(db, "profile");
  //     const imgRef = ref(storage);
  //     const data = await getDocs(colRef);
  //     data.docs.map(async (doc) => {
  //       const temp = await takeNestedData(doc.data().author.id);
  //       const temp2 = await takeMoreNestedData(doc.data().author.id);
  //       console.log("ASDAASDAASDAASDAASDAASDAASDAASDAASDAASDA");
  //       console.log(temp2.time);
  //       console.log(doc.data().inputs);
  //       console.log(temp);
  //       console.log("ASDAASDAASDAASDAASDAASDAASDAASDAASDAASDA");
  //       resumeData.push([temp2.time, doc.data().inputs, temp]);
  //       const tempArr = resumeData;
  //       setResumeData(tempArr);
  //       //   console.log(tempArr);
  //       console.log(resumeData);
  //       setTempData(resumeData);
  //     });
  //     console.log("000000000000000000000000000000000000");
  //     console.log(resumeData);
  //     console.log(tempData);
  //   }

  //   async function takeNestedData(id) {
  //     const colRef = collection(db, "profile", `${id}`, "jobs");
  //     const data = await getDocs(colRef);
  //     return data.docs.map((doc) => {
  //       return doc.data();
  //     });
  //   }

  //   async function takeMoreNestedData(id) {
  //     const colRef = doc(db, "profile", `${id}`, "time", "schedule");
  //     const data = await getDoc(colRef);
  //     if (!data.data()) {
  //       return [];
  //     }
  //     return data.data();
  //   }

  const takeData = async () => {
    const colRef = collection(db, "profile");
    const data = await getDocs(colRef);
    const mappedData = data.docs.map((docs) => {
      return docs.data();
    });
    setResumeData(mappedData);
  };

  //   const takeImages = async () => {
  //     for (let i = 0; i < resumeData.length; i++) {
  //       console.log(resumeData[i].author.id);
  //       const storageRef = ref(storage, `${resumeData[i].author.id}/profile`);
  //       //   let imgUrl;
  //       getDownloadURL(storageRef).then((url) => {
  //         resumeData[i].img = url;
  //       });
  //     }
  //   };

  useEffect(() => {
    takeData();
    takeImages();
  }, []);

  //   const pathReference = ref(storage, `/${userId}/profile`);

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
      {resumeData.map((e) => {
        // console.log(e);
        return (
          <div>
            <h1>{e.inputs.name}</h1>
            <h1>{e.inputs.email}</h1>
            <h1>{e.inputs.educationLevel}</h1>
            <img src={e.img} />
          </div>
        );
      })}
    </div>
  );
}
export default Resumes;
