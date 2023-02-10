import { React, useState } from "react";
import { Link } from "react-router-dom";

function CourseIcon({ image, title, link }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div>
      <Link to={link}>
        <img
          src={image}
          className={`w-40 h-40 rounded-lg cursor-pointer transform transition-transform duration-500${
            isHover ? "scale-140" : ""
          }`}
          style={{
            transform: isHover ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        ></img>
        <p className="font-bold mt-1">{title}</p>
      </Link>
    </div>
  );
}

export default CourseIcon;
