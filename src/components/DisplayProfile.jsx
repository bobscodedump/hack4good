import { React, useState, useEffect } from "react";

function DisplayProfile({ profileList, imgUrl }) {
  const userId = localStorage.getItem("uid");

  const { name, email, mobileNumber, educationLevel } = profileList;

  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{mobileNumber}</h1>
      <h1>{educationLevel}</h1>
      <img src={imgUrl} className="max-w-sm max-h-sm" />
    </div>
  );
}

export default DisplayProfile;
