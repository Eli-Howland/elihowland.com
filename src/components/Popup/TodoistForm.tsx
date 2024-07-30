import React, { ReactNode, useState } from "react";
import "../css/TodoistForm.css";

interface Props {
  onSubmit: (message: string, status: "success" | "failure") => void;
}

const TodoistForm = ({ onSubmit }: Props) => {
  const [formValues, setFormValues] = useState({
    taskName: "",
    taskDescription: "",
    project: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    console.log(formValues);
    const apiUrl = "http://localhost:5000/api/todoist";
    //send to backend
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        onSubmit(`Form submission failed (womp womp)`, "failure");
        throw new Error(
          `HTTP Error: ${response.status}, ${response.statusText}`
        );
      } else {
        onSubmit(`Form submitted successfully!`, "success");
      }
    } catch (error) {
      throw new Error(`Api request failed from the jump ${error}`);
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">TODOIST</div>
      <div className="form-body"> Add a task to my Todoist</div>
      <div className="form-body">
        <label className="form-question">
          {" "}
          Task Name:{" "}
          <input
            type="text"
            name="taskName"
            value={formValues.taskName}
            onChange={handleInputChange}
          />{" "}
        </label>
        <label className="form-question">
          {" "}
          Task Description:{" "}
          <input
            type="text"
            name="taskDescription"
            value={formValues.taskDescription}
            onChange={handleInputChange}
          />{" "}
        </label>
        <label className="form-question">
          {" "}
          Project :{" "}
          <input
            type="text"
            name="project"
            value={formValues.project}
            onChange={handleInputChange}
          />{" "}
        </label>
        <button className="form-submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default TodoistForm;
