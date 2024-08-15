import React, { useState } from "react";

interface Props {
  onSubmit: (message: string, status: "success" | "failure") => void;
}

const PasswordForm = ({ onSubmit }: Props) => {
  const [formValues, setFormValues] = useState({
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const apiUrl = "http://localhost:5000/api/todoist/auth";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      //TODO: make a different response here based on server error vs password incorrect
      console.log(response);
      if (!response.ok) {
        onSubmit("Password Incorrect!", "failure");
        setErrorMessage("Password is incorrect!");
      } else {
        sessionStorage.setItem("isAuthenticated", "true");
        onSubmit("", "success");
        setErrorMessage(null);
      }
    } catch (error) {
      setErrorMessage("An error occurred, please try again");
      throw new Error(`API Request failed from the jump: ${error}`);
    }
  };

  return (
    <div className="form-container">
      <div className="form-header"> PASSWORD</div>
      <div className="form-body">
        <label className="form-question">
          Enter Password{" "}
          <input
            type="text"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
        </label>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button className="form-submit-button" onClick={handleSubmit}>
          {" "}
          Submit
        </button>
      </div>
    </div>
  );
};

export default PasswordForm;
