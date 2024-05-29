import React from "react";
import "./Form.css";

const RegistrationForms = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  };

  const validationState = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  };

  const focusInitialState = {
    firstName: false,
    lastName: false,
    email: false,
    contact: false,
  };

  const [formData, setFormData] = React.useState(initialState);
  const [formAlert, setFormAlert] = React.useState(validationState);
  const [inputFocus, setInputFocus] = React.useState(focusInitialState);
  const [registrationSuccess, setRegistrationSuccess] = React.useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleInputFocus(name) {
    setInputFocus((prevFocusData) => ({ ...prevFocusData, [name]: true }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    let messageBox = {};

    if (formData.firstName === "") {
      messageBox.firstName = "Please Enter your first Name";
    } else {
      messageBox.firstName = "";
    }

    if (formData.lastName === "") {
      messageBox.lastName = "Please Enter your last Name";
    } else {
      messageBox.lastName = "";
    }

    if (formData.email === "") {
      messageBox.email = "Please Enter your email";
    } else {
      messageBox.email = "";
    }

    if (formData.contact === "") {
      messageBox.contact = "Please Enter your Contact number";
    } else {
      messageBox.contact = "";
    }

    setFormAlert(messageBox);

    if (
      messageBox.firstName === "" &&
      messageBox.lastName === "" &&
      messageBox.email === "" &&
      messageBox.contact === ""
    ) {
      setRegistrationSuccess(true);
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            onFocus={() => handleInputFocus("firstName")}
            placeholder="First name"
            className="form-input"
            style={{ borderColor: inputFocus.firstName ? "red" : "#ccc" }}
          />
          <div>{formAlert.firstName}</div>
        </label>
        <label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            onFocus={() => handleInputFocus("lastName")}
            placeholder="Last name"
            className="form-input"
            style={{ borderColor: inputFocus.lastName ? "red" : "#ccc" }}
          />
          <div>{formAlert.lastName}</div>
        </label>
        <label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onFocus={() => handleInputFocus("email")}
            placeholder="Email"
            className="form-input"
            style={{ borderColor: inputFocus.email ? "red" : "#ccc" }}
          />
          <div>{formAlert.email}</div>
        </label>
        <label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            onFocus={() => handleInputFocus("contact")}
            placeholder="Phone number"
            className="form-input"
            style={{ borderColor: inputFocus.contact ? "red" : "#ccc" }}
          />
          <div>{formAlert.contact}</div>
        </label>
        <button className="submit-button">Register</button>
      </form>
      <div className="registration-message">
        {registrationSuccess && <div>Registration Successful!!</div>}
      </div>
    </div>
  );
};

export default RegistrationForms;
