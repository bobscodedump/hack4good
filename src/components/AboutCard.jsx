import React from "react";

function AboutCard({ image, title, description, link }) {
  return (
    <div className="w-[660px] mx-auto mb-20">
      <img src={image} className="mx-auto h-[370px] rounded-t-lg w-[1000px]" />
      <div className="bg-white h-[170px] rounded-b-lg pt-10 pb-40">
        <h3 className="text-center font-bold text-lg mb-4">{title}</h3>
        <div className="text-center">
          <p className="px-10 mb-4">"{description}"</p>
          <a
            href={link}
            className="w-32 bg-blue-100 block rounded-lg py-2 ml-[520px] text-blue-400"
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
