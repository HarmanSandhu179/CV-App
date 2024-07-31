import GeneralForm from "./GeneralForm";
import dropdownImage from "../icons/dropdown.png";

import { useState } from "react";

function Generalnfo({ formData, setFormData }) {
  const [displayForm, setDisplayForm] = useState(1);

  const displayFormButton = (event) => {
    if (displayForm === 0) {
      setDisplayForm(1);
    } else {
      setDisplayForm(0);
    }
  };

  return (
    <div className="flex-1 border border-red-500 flex items-start flex-col">
      <p className="text-cyan-600"> General Info </p>
      <button className="bg-white" onClick={displayFormButton}>
        <img src={dropdownImage} alt="Icon" className="w-6 h-6 mr-2" />
      </button>
      {displayForm === 0 ? (
        <GeneralForm
          formData={formData}
          setFormData={setFormData}
          setDisplayForm={setDisplayForm}
        />
      ) : null}
    </div>
  );
}

export default Generalnfo;
