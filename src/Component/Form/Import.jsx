import React, { useState } from "react";

export function Import({ formID, handleNext }) {
  const [inputValues, setInputValues] = useState({
    fName: "",
    lName: "",
    number: "",
    city: "",
  });

  const [validation, setValidation] = useState({
    fName: "",
    lName: "",
    number: "",
    city: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputValues);

    let errors = validation;

    //  First Name Validation
    if (!inputValues.fName) {
      errors.fName = "First-Name is required";
    } else {
      errors.fName = "";
      handleNext()
    }

    return setValidation(errors);
  };

  return (
    <>
      <div className="form-container">
        <h3 style={{ color: "blue" }}>Import File</h3>
        <form className="form" onSubmit={handleSubmit} id={formID} key={formID}>
          <div>
            <input
              type="text"
              id="name"
              name="fName"
              placeholder="First-Name"
              value={inputValues.fName}
              onChange={handleChange}
              // required
            />
            {validation.fName && (
              <p style={{ color: "red" }}>{validation.fName}</p>
            )}
            {validation.fName && console.log(validation)}
            <br />

            <input
              type="text"
              placeholder="Last-Name"
              name="lName"
              onChange={handleChange}
              value={inputValues.lName}
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Number"
              name="number"
              value={inputValues.number}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              value={inputValues.city}
              onChange={handleChange}
              required
            />
          </div>
        </form>
      </div>
    </>
  );
}
