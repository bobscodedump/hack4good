import React from "react";
import { useForm } from "react-hook-form";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import NavBar from "../components/NavBar";
import BgImage from "../../public/assets/images/KidneyHeart.png";

function About() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    });
  };

  // watch input value by passing the name of it

  return (
    <>
      <div className="flex">
        <div className="h-350 w-450 bg-red-300 rounded-md ml-40 mt-40 pt-10">
          <h1 className="font-bold text-4xl text-yellow-900 ml-6">
            Connect. &nbsp;&nbsp; Empower.
          </h1>
          <h1 className="font-bold text-4xl text-yellow-900 ml-6 mt-4">
            Transform.
          </h1>
          <p className="ml-8 mt-8 text-lg text-red-100 w-96 break-words leading-7 mb-5">
            Our project connects employers to employees with kidney failure by
            providing upskilling opportunities. <br /> Join us in our movement
            to uplift.
          </p>
          <span
            onClick={signInWithGoogle}
            className="ml-6 cursor-pointer text-yellow-800 rounded-md  bg-red-200 px-4 py-2 font-bold"
          >
            Join Us
          </span>
        </div>
        <img src={BgImage} className="-rotate-90 ml-96 mt-40" />
      </div>
    </>
  );
}

export default About;
