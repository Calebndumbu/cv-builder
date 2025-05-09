// src/components/Experience.js
import React, { useState } from "react";

function Experience() {
  const [editMode, setEditMode] = useState(true);
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
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
      <h2>Experience</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
          />
          <input
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Position"
          />
          <input
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            placeholder="Responsibilities"
          />
          <input
            name="from"
            value={formData.from}
            onChange={handleChange}
            placeholder="From"
          />
          <input
            name="to"
            value={formData.to}
            onChange={handleChange}
            placeholder="To"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Company:</strong> {formData.company}
          </p>
          <p>
            <strong>Position:</strong> {formData.position}
          </p>
          <p>
            <strong>Responsibilities:</strong> {formData.responsibilities}
          </p>
          <p>
            <strong>From:</strong> {formData.from}
          </p>
          <p>
            <strong>To:</strong> {formData.to}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Experience;
