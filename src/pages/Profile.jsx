import React from "react";

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <section>
        <h2>Name</h2>
        <input type="text" placeholder="Full Name..." />
      </section>
      <section>
        <h2>Email</h2>
        <input type="email" placeholder="Email..." />
      </section>
      <section>
        <h2>Education Level</h2>
        <fieldset>
          <select class="form-control dropdown" id="education" name="education">
            <option value="" selected="selected" disabled="disabled">
              -- select one --
            </option>
            <option value="No formal education">No formal education</option>
            <option value="Primary education">Primary education</option>
            <option value="Secondary education">
              Secondary education or high school
            </option>
            <option value="GED">Diploma</option>
            <option value="Vocational qualification">
              Vocational qualification
            </option>
            <option value="Bachelor's degree">Bachelor's degree</option>
            <option value="Master's degree">Master's degree</option>
            <option value="Doctorate or higher">Doctorate or higher</option>
          </select>
        </fieldset>
      </section>
      <section>
        <h2>Name</h2>
        <input type="text" placeholder="Your Full Name..." />
      </section>
    </div>
  );
}

export default Profile;
