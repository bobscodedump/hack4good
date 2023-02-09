import { React, useState, useEffect } from "react";
import { setDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth, storage } from "../firebase-config";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

import EditingTime from "./EditingTime";

function Editing({ profileList, imgUrl, time }) {
  //text data collection
  const userId = localStorage.getItem("uid");

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    educationLevel: "",
  });

  useEffect(() => {
    if (profileList) {
      setInputs(profileList);
    }
  }, []);

  let isFormValid = true;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const { name, email, mobileNumber, educationLevel } = inputs;

  //form validation
  const handleValidation = () => {
    const errors = {
      name: "",
      email: "",
      mobileNumber: "",
      educationLevel: "",
      pictureUpload: "",
    };
    if (name === "") {
      isFormValid = false;
      alert("name");
      errors.name = "Please enter your full name";
    }
    if (email === "") {
      isFormValid = false;
      alert("email");
      errors.email = "Please enter your email";
    }
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(validRegex)) {
      isFormValid = false;
      alert("email");
      errors.email = "Please enter a valid email";
    }
    const phoneRegex = /^(6|8|9)\d{7}$/;
    if (mobileNumber === "") {
      isFormValid = false;
      alert("no");
      errors.mobileNumber = "Please enter your phone number";
    }
    if (!mobileNumber.match(phoneRegex)) {
      isFormValid = false;
      alert("no");
      errors.mobileNumber = "Please enter a valid phone number";
    }
    if (educationLevel == "default") {
      isFormValid = false;
      alert("education");
      errors.educationLevel = "Please enter your education level";
    }
    if (!uploaded) {
      isFormValid = false;
      alert("uploaded");
      errors.pictureUpload = "Please upload your profile picture";
    }
    return errors;
  };

  // const profileCollectionRef = collection(db, "profile");
  const profileDoc = doc(db, "profile", userId);

  //submiting form, passing data to firebase
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      handleValidation();

      if (isFormValid && uploaded) {
        await deleteDoc(profileDoc);
        await setDoc(profileDoc, {
          author: {
            name: auth.currentUser.displayName,
            id: userId,
          },
          inputs,
        });
        // window.location.pathname = "/profile";
        alert("Profile updated!");
      } else {
        alert("Form has errors");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  //profile picture collection
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [uploaded, updateUploaded] = useState(false);

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  //passing profile picture to firebase
  function handleUpload() {
    if (!file) {
      alert("Please choose a file first!");
    }
    const storageRef = ref(storage, `/${userId}/profile`);
    if (!storageRef) {
      deleteObject(storageRef);
    }
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
        updateUploaded(true);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  }

  return (
    <div id="text input area">
      <div>
        <h1>Profile</h1>
        <section>
          <h2>Name</h2>
          <input
            type="text"
            placeholder="Full Name..."
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </section>
        <section>
          <h2>Email</h2>
          <input
            type="email"
            placeholder="Email..."
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </section>
        <section>
          <h2>Phone Number</h2>
          <input
            type="tel"
            placeholder="Phone Number..."
            pattern="[8-9]-------"
            name="mobileNumber"
            value={mobileNumber}
            onChange={(e) => onChange(e)}
            required
          />
        </section>
        <section>
          <h2>Education Level</h2>
          <fieldset>
            <select
              name="educationLevel"
              value={educationLevel}
              onChange={(e) => onChange(e)}
              required
            >
              <option value="" defaultValue={"default"} disabled="disabled">
                -- select one --
              </option>
              <option value="No formal education">No formal education</option>
              <option value="Primary education">Primary education</option>
              <option value="Secondary education">
                Secondary education or high school
              </option>
              <option value="GED">Diploma</option>
              <option value="Vocational qualification">
                Vocational qualification
              </option>
              <option value="Bachelor's degree">Bachelor's degree</option>
              <option value="Master's degree">Master's degree</option>
              <option value="Doctorate or higher">Doctorate or higher</option>
            </select>
          </fieldset>
        </section>
        <section>
          <img src={imgUrl} className="max-w-sm max-h-sm" />
          <h2>Upload Profile Picture</h2>
          <input type="file" accept="image/*" onChange={handleChange} />
          <p>{percent} "% done"</p>
          <button onClick={handleUpload}>Upload</button>
        </section>
        <div>
          <button onClick={submitForm}>Submit</button>
        </div>
      </div>
      <EditingTime currTime={time} />
    </div>
  );
}

export default Editing;
