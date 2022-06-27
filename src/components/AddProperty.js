import React, { useState } from "react";
import axios from "axios";
import "../styles/addproperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "",
      email: "chrissy@email.com",
      price: "",
      bathrooms: "",
      bedrooms: "",
      type: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();

    axios
      .post("https://surreal-api.herokuapp.com/api/v1/PropertyListing", fields)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  const handleFieldChange = (event) => {
    const changedField = event.target.name;
    const newValue = event.target.value;
    setFields({ ...fields, [changedField]: newValue });
  };

  return (
    <div className="add-property">
      <h1>Add Property Page</h1>

      <div className="form">
        <form onSubmit={handleAddProperty}>
          <div className="input">
            <label htmlFor="title">
              <div className="input-label">Property Description</div>
              <input
                className="input-field"
                id="title"
                name="title"
                defaultValue={fields.title}
                placeholder="Property title"
                onChange={handleFieldChange}
              />
            </label>
          </div>

          <div className="input">
            <label htmlFor="city">
              <div className="input-label">City</div>
              <select
                className="input-field"
                id="city"
                name="city"
                value={fields.city}
                onChange={handleFieldChange}
              >
                <option value="City">Select City</option>
                <option value="Manchester">Manchester</option>
                <option value="Leeds">Leeds</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Liverpool">Liverpool</option>
              </select>
            </label>
          </div>

          <div className="input">
            <label htmlFor="bedrooms">
              <div className="input-label">Bedrooms</div>
              <input
                id="bedrooms"
                name="bedrooms"
                defaultValue={fields.bedrooms}
                placeholder="1"
                onChange={handleFieldChange}
              />
            </label>
          </div>

          <div className="input">
            <label htmlFor="bathrooms">
              <div className="input-label">Bathrooms</div>
              <input
                className="input-field"
                id="bathrooms"
                name="bathrooms"
                defaultValue={fields.bathrooms}
                placeholder="1"
                onChange={handleFieldChange}
              />
            </label>
          </div>

          <div className="input">
            <label htmlFor="type">
              <div className="input-label">Property type:</div>
              <select
                id="type"
                name="type"
                value={fields.type}
                onChange={handleFieldChange}
              >
                <option value="Type">Property Type</option>
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
                <option value="Terraced">Terraced</option>
                <option value="End of Terrace">End of Terrace</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </label>
          </div>

          <div className="input">
            <label htmlFor="price">
              <div className="input-label">Price</div>
              <input
                className="input-field"
                id="price"
                name="price"
                defaultValue={fields.price}
                placeholder="£1000"
                onChange={handleFieldChange}
              />
            </label>
          </div>

          <div className="input">
            <label htmlFor="email">
              <div className="input-label">Email</div>
              <input
                className="input-field"
                id="email"
                name="email"
                defaultValue={fields.email}
                placeholder="user@email.com"
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <button className="button" type="submit">
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
