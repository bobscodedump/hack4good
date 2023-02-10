import React from "react";
import { useForm } from "react-hook-form";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import BgImage from "../../public/assets/images/KidneyHeart.png";
import OldMan from "../../public/assets/images/oldGuy.png";
import sad from "../../public/assets/images/Screenshot 2023-02-09 at 12.49.19 AM.png";
import AboutCard from "../components/AboutCard";
import { Descriptions } from "antd";
import heartree from "../../public/assets/images/hold.png";
import heart from "../../public/assets/images/heart.png";

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

  const description = [
    "I feel like a prisoner. Every time I come I feel that I am losing time and I can't wait to get out of this to have something to do",
    "I was diagnosed with kidney failure at the age of 19. My parents are working as cleaners and earning 2000 yuan a month",
  ];

  const link = [
    "https://www.youtube.com/watch?v=mLAY9rx4mkYt=3s",
    "https://www.youtube.com/watch?v=qI7wgZVAPvQ&t=32s",
  ];

  const image = [OldMan, sad];

  const title = ["Alejo Morales", "Sun Wenjuan"];

  // watch input value by passing the name of it

  return (
    <>
      <div className="flex mb-20">
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
        <img src={BgImage} className="-rotate-90 ml-auto mt-40 bg-fixed " />
      </div>
      <div className="grid -mt-20 bg-red-100">
        <img src={heart} className="animate-bounce object-center mx-auto" />

        <h1 className="text-center text-yellow-900 font-bold font-sans text-4xl mt-30">
          Why Should We Support Them?
        </h1>
        <h4 className="text-center font-sans text-xl mb-10 mt-4">
          A walk through the lives of kidney patients
        </h4>
        <AboutCard
          image={image[0]}
          link={link[0]}
          description={description[0]}
          title={title[0]}
        />
        <AboutCard
          image={image[1]}
          link={link[1]}
          description={description[1]}
          title={title[1]}
        />
        <img src={heartree} className="mx-auto " />
      </div>
    </>
  );
}

export default About;
