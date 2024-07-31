import React, { useState } from "react";

function ExperienceForm({ formExperience, setFormExperience, setDisplayForm }) {
  let savedFormData = [];

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormExperience({
      ...formExperience,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Form Data Submitted:", formExperience);
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
        <label htmlFor="name" className="block text-gray-700">
          Company Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formExperience.name}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">
          Position Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formExperience.title}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="dateFrom" className="block text-gray-700">
          Date From:
        </label>
        <input
          type="date"
          id="dateFrom"
          name="dateFrom"
          value={formExperience.dateFrom}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="dateTo" className="block text-gray-700">
          Date To:
        </label>
        <input
          type="date"
          id="dateTo"
          name="dateTo"
          value={formExperience.dateTo}
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
          value={formExperience.description}
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

export default ExperienceForm;
