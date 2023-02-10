import React from "react";

function Resumes({ imgUrl, profileList }) {
  const { name, email, mobileNumber, educationLevel } = profileList;
  return (
    <div>
      <div>
        <img src={imgUrl} />
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{mobileNumber}</h1>
        <h1>{educationLevel}</h1>
      </div>
    </div>
  );
}

export default Resumes;
