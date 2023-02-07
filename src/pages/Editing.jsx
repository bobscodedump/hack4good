import { React, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";

function Editing() {
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
      <div>
        <button onClick={submitForm}>Submit</button>
      </div>
    </div>
  );
}

export default Editing;
