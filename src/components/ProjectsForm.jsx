import React, { useState } from "react";

function ProjectsForm({ formProject, setFormProject, setDisplayForm }) {
  let savedFormData = [];

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormProject({
      ...formProject,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Form Data Submitted:", formProject);
    setDisplayForm(1);
    // Optionally, you can clear the form after submission
    // setFormData({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   phoneNumber: "",
    // });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border border-gray-300 rounded-md shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formProject.title}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="tools" className="block text-gray-700">
          Tools:
        </label>
        <input
          type="text"
          id="tools"
          name="tools"
          value={formProject.tools}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700">
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formProject.date}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700">
          Description:
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={formProject.description}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default ProjectsForm;
