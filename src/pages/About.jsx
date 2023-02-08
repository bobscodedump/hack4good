import React from "react";
import { useForm } from "react-hook-form";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import NavBar from "../components/NavBar";
import hero from "../../public/HeroNKF.jpg";

function About() {
  // watch input value by passing the name of it

  return (
    <div>
      <img src={hero} />
    </div>
  );
}

export default About;
