import React from "react";

const Card = ({ image, title, description, link }) => {
  return (
    <a href={link}>
      <div className="p-8 bg-white rounded-lg shadow-lg border-2 border-black w-[356px] h-[400px] transition-transform duration-500 hover:scale-120 transform hover:-translate-y-2 hover:shadow-2xl">
        <img
          src={image}
          alt="Java Course for Beginners"
          className="w-full h-32 mb-6 object-cover object-center"
        />
        <p className="font-sans font-bold text-lg">{title}</p>
        <p className="text-lg">{description}</p>
      </div>
    </a>
  );
};

export default Card;
