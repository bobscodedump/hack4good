import { React, useState } from "react";

function AboutCard({ image, title, description, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-[660px] mx-auto mb-20 relative transform transition-transform duration-500 ${
        isHovered ? "scale-140" : ""
      }`}
      style={{
        transform: isHovered ? "scale(1.1)" : "scale(1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} className="mx-auto h-[370px] rounded-t-lg w-[1000px]" />
      <div className="bg-white h-[210px] rounded-b-lg pt-10 ">
        <h3 className="text-center text-yellow-900 font-bold font-sans text-2xl mb-4">
          {title}
        </h3>
        <div className="text-center pb-4">
          <p className="px-10 text-xl text-rose-900 font-sans ">
            "{description}"
          </p>
          <a
            href={link}
            className="w-32 bg-pink-100 block rounded-lg py-2 ml-[520px] text-orange-700 mt-4"
            target="_blank"
          >
            Hear their story
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
