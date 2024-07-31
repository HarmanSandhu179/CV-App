import dropdownImage from "../icons/dropdown.png";
import ExperienceForm from "./ExperienceForm";

import { useState } from "react";

function Experience({ formExperience, setFormExperience }) {
  const [displayForm, setDisplayForm] = useState(1);

  const displayFormButton = (event) => {
    if (displayForm === 0) {
      setDisplayForm(1);
    } else {
      setDisplayForm(0);
    }
  };

  return (
    <div className="flex-1 border border-red-500">
      <p className=""> Experience </p>
      <button className="bg-white" onClick={displayFormButton}>
        <img src={dropdownImage} alt="Icon" className="w-6 h-6 mr-2" />
      </button>
      {displayForm === 0 ? (
        <ExperienceForm
          formExperience={formExperience}
          setFormExperience={setFormExperience}
          setDisplayForm={setDisplayForm}
        />
      ) : null}
    </div>
  );
}

export default Experience;
