import React from "react";
import JavaCourse from "../../public/assets/images/javacourse.png";
import { Link } from "react-router-dom";

function NewPage() {
  return (
    
    <div className="flex gap-10 justify-center mt-5">
      <div className="flex flex-col">
      <a href= "https://www.codecademy.com/learn/introduction-to-javascript">
        <img src={JavaCourse} className="w-40 cursor-pointer"></img>
        </a>
      </div>
      </div>
   
  );
}

export default NewPage;