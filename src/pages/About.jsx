import React from "react";
import { useForm } from "react-hook-form";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import NavBar from "../components/NavBar";
import BgImage from "../assets/images/HeroNKF.jpg";

function About() {
  // watch input value by passing the name of it

  return (
    <>
      <div>
        <img src={BgImage} />
      </div>
    </>
  );
}

export default About;
