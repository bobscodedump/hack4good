import { React, useState } from "react";

import Editing from "./Editing";
import DisplayProfile from "./DisplayProfile";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {isEditing ? <Editing /> : <DisplayProfile />}
      <div>
        {!isEditing ? (
          <button
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            Edit
          </button>
        ) : (
          <button
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;
