import { React, useState } from "react";
import { setDoc, collection, deleteDoc, doc, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase-config";

function Experiences() {
  const userId = localStorage.getItem("uid");

  const [inputs, setInputs] = useState({
    type: "",
    description: "",
  });

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const { type, description } = inputs;

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "profile", userId, "jobs");
    await addDoc(docRef, {
      type: inputs.type,
      description: inputs.description,
    });
  };

  return (
    <div>
      <h1>Experiences</h1>
      <div>
        <fieldset>
          <select name="type" value={type} onChange={(e) => onChange(e)}>
            <option value="" defaultValue={"default"} disabled="disabled">
              -- select one --
            </option>
            <option value="Job">Job</option>
            <option value="Skill">Skill</option>
          </select>
        </fieldset>
        <textarea
          name="description"
          value={description}
          placeholder="Write description here..."
          onChange={(e) => onChange(e)}
        />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Experiences;
