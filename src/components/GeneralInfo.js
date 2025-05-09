// src/components/GeneralInfo.js
import React, { useState } from "react";

function GeneralInfo() {
  const [editMode, setEditMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent the page from refreshing
    setEditMode(false); //Switch to display mode
  };

  //Function to switch back to edit mode
  const handleEdit = () => setEditMode(true);

  return (
    <div className="section">
      <h2>General Information</h2>

      {editMode ? (
        //render form if edit mode is true
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        //render submitted info and an edit button when not in edit mode
        <div>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>

          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phone}
          </p>

          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;
