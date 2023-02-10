import React, { useState } from "react";
import Gear from "../../public/assets/images/beatriceGear.jpg";
import Excel from "../../public/assets/images/ExcelImage.jpg";
import File from "../../public/assets/images/FileImage.jpg";
import Person from "../../public/assets/images/personImg.jpg";
import Telephone from "../../public/assets/images/telephoneImg.jpg";
import Bling from "../../public/assets/images/bling.jpg";
import { Link } from "react-router-dom";
import CourseIcon from "../components/CourseIcon";
function Courses() {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <h1 className="text-2xl font-bold ml-40 mt-20">Categories</h1>
      <div className="flex gap-10 justify-center mt-5">
        <div className="flex flex-col">
          <Link to="/newpage">
            <img src={Gear} className="w-40 rounded-lg cursor-pointer"></img>
            <p className="font-bold mt-1">IT</p>
          </Link>
        </div>
        <div>
          <img src={Bling} className="w-40 rounded-lg cursor-pointer"></img>
          <p className="font-bold mt-1">Design</p>
        </div>
        <div>
          <img
            src={Excel}
            className="w-40 h-40 rounded-lg cursor-pointer"
          ></img>
          <p className="font-bold mt-1">Data</p>
        </div>
        <div>
          <img src={File} className="w-40 rounded-lg cursor-pointer"></img>
          <p className="font-bold mt-1">Language</p>
        </div>
        <div>
          <img src={Person} className="w-40 rounded-lg cursor-pointer"></img>
          <p className="font-bold mt-1">Content Creation</p>
        </div>
        <div>
          <img src={Telephone} className="w-40 rounded-lg cursor-pointer"></img>
          <p className="font-bold mt-1">Customer Service</p>
        </div>
      </div>
    </>
  );
  return;
}

export default Courses;
