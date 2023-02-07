import { React, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth, storage } from "../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Editing() {
  //text data collection
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    educationLevel: "",
  });

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const { name, email, mobileNumber, educationLevel } = inputs;

  const profileCollectionRef = collection(db, "profile");

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await addDoc(profileCollectionRef, {
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
        inputs,
      });
      window.location.pathname = "/profile";
    } catch (err) {
      console.error(err.message);
    }
  };

  //profile picture collection
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload() {
    if (!file) {
      alert("Please choose a file first!");
    }
    const storageRef = ref(storage, `/${auth.currentUser.uid}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
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
        />
      </section>
      <section>
        <h2>Education Level</h2>
        <fieldset>
          <select
            name="educationLevel"
            value={educationLevel}
            onChange={(e) => onChange(e)}
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
        <h2>Upload Profile Picture</h2>
        <input type="file" accept="image/*" onChange={handleChange} />
        <p>{percent} "% done"</p>
        <button onClick={handleUpload}>Upload</button>
      </section>
      <div>
        <button onClick={submitForm}>Submit</button>
      </div>
    </div>
  );
}

export default Editing;
