// src/components/Education.js
import React, { useState } from "react";

function Education() {
  const [editMode, setEditMode] = useState(true);
  const [formData, setFormData] = useState({
    school: "",
    title: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleEdit = () => setEditMode(true);

  return (
    <div className="section">
      <h2>Education</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            name="school"
            value={formData.school}
            onChange={handleChange}
            placeholder="School"
          />
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title of Study"
          />
          <input
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Date of Study"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>School:</strong> {formData.school}
          </p>
          <p>
            <strong>Title:</strong> {formData.title}
          </p>
          <p>
            <strong>Date:</strong> {formData.date}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Education;
