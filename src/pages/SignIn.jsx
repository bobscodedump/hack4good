import React from "react";
import { useForm } from "react-hook-form";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import NavBar from "../components/NavBar";

function SignIn() {
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
      <NavBar />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-64 flex justify-end"
      >
        {/* register your input into the hook by invoking the "register" function */}
        <div className="flex flex-col w-80 mr-80">
          {" "}
          <p className="font-bold mb-2">
            Enroll in our upskilling classes now!
          </p>
          <p className="text-xs font-bold mb-1">Email</p>
          <input
            defaultValue=""
            {...register("Username")}
            className="border-2 border-black mb-2 h-10"
          />
          {/* include validation with required or other standard HTML validation rules */}
          <p className="text-xs font-bold mb-1">Password</p>
          <input
            {...register("Password", { required: true })}
            className="border-2 border-black h-10"
          />
          {/* errors will return when field validation fails  */}
          {errors.password && <span>This field is required</span>}
          <div>
            {/*<input
            type="Submit"
            placeholder="Sign up
      "
            value="Sign Up"
            className="mt-4 border-2  bg-indigo-700 text-white px-4 py-2 rounded-md"
  />*/}
            <button onClick={signInWithGoogle}>signin</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignIn;
