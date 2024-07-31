import { useState } from "react";
import Generalnfo from "./components/Generalnfo";
import Heading from "./components/Heading";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  const [count, setCount] = useState(0);

  // State to store form input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [formProject, setFormProject] = useState({
    title: "",
    tools: "",
    date: "",
    description: "",
  });

  const [formExperience, setFormExperience] = useState({
    name: "",
    title: "",
    dateFrom: "",
    dateTo: "",
    description: "",
  });

  return (
    <div className="flex h-screen gap-3 p-3">
      <div className="information h-full flex-1 flex justify-center flex-col bg-gray-300">
        <Heading />
        <Generalnfo formData={formData} setFormData={setFormData} />
        <Projects formProject={formProject} setFormProject={setFormProject} />
        <Experience
          formExperience={formExperience}
          setFormExperience={setFormExperience}
        />
      </div>
      <div className="resume h-full flex-1 flex border-2 border-black bg-gray-200 flex-col items-center">
        <p className="text-3xl font-bold">
          {formData.firstName} {formData.lastName}
        </p>
        <p>
          {formData.email} {formData.phoneNumber}
        </p>
        <hr className="w-full my-4 border-t-2 border-red-700" />
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="underline">
          {formProject.title} | {formProject.tools} | {formProject.date}
        </p>
        <p> {formProject.description}</p>
        <hr className="w-full my-4 border-t-2 border-red-700" />
        <h1 className="text-3xl font-bold"> Experience </h1>
        <p>
          {formExperience.name} | {formExperience.title}
        </p>
        <p>
          {formExperience.dateFrom} -- {formExperience.dateTo}
        </p>
        <p> {formExperience.description}</p>
      </div>
    </div>
  );
}

export default App;
