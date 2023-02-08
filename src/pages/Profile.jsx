import { React, useState } from "react";

import Editing from "./Editing";
import DisplayProfile from "./DisplayProfile";

function Profile({ userId }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {isEditing ? <Editing /> : <DisplayProfile userId={userId} />}
      <div>
        <button
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          edit
        </button>
      </div>
    </div>
  );
}

export default Profile;
