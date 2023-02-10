import { React, useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db, auth } from "../firebase-config";

function Experiences({ getInputs, setGetInputs }) {
  const userId = localStorage.getItem("uid");

  //collecting inputs
  const [inputs, setInputs] = useState({
    type: "",
    description: "",
  });

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    // console.log(inputs);
  };

  const { type, description } = inputs;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = collection(db, "profile", `${userId}entries`, "jobs");
      await addDoc(docRef, {
        type: inputs.type,
        description: inputs.description,
      });
      setInputs({
        type: "",
        description: "",
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  //getting inputs
  //   const [getInputs, setGetInputs] = useState([]);
  //   useEffect(() => {
  //     const q = query(
  //       collection(db, "profile", `${userId}entries`, "jobs"),
  //       orderBy("type")
  //     );
  //     onSnapshot(q, (querySnapshot) => {
  //       setGetInputs(
  //         querySnapshot.docs.map((doc) => ({
  //           type: doc.data().type,
  //           description: doc.data().description,
  //           id: doc.id,
  //         }))
  //       );
  //     });
  //     console.log(getInputs);
  //   }, []);

  const handleDelete = async (e) => {
    const id = e.target.value;
    const taskDocRef = doc(db, "profile", `${userId}entries`, "jobs", id);
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
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
        <button onClick={onSubmit}>Submit</button>
      </div>
      {getInputs.map((input) => (
        <div>
          <h1>{input.type}</h1>
          <p>{input.description}</p>
          <button value={input.id} onClick={(e) => handleDelete(e)}>
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
}

export default Experiences;
