import React from "react";

export default function Info(props) {
  if (props.submitted === false) {
    return (
      <div className="info-section">
        <form>
          <h2>Personal Information</h2>
          <input
            placeholder="First name"
            onChange={props.handleChange}
            name="firstName"
            value={props.firstName}
          ></input>
          <input
            placeholder="Surname"
            onChange={props.handleChange}
            name="lastName"
            value={props.lastName}
          ></input>
          <input
            placeholder="Professional title"
            onChange={props.handleChange}
            name="professionalTitle"
            value={props.professionalTitle}
          ></input>
          <input
            placeholder="location"
            onChange={props.handleChange}
            name="location"
            value={props.location}
          ></input>
          <input
            type="email"
            placeholder="Email"
            onChange={props.handleChange}
            name="email"
            value={props.email}
          ></input>
          <input
            type="number"
            placeholder="Phone"
            onChange={props.handleChange}
            name="phone"
            value={props.phone}
          ></input>
          <input
            placeholder="linkedIn username"
            onChange={props.handleChange}
            name="linkedIn"
            value={props.linkedIn}
          ></input>

          <input
            type="text"
            placeholder="About"
            onChange={props.handleChange}
            name="about"
            className="info-about"
            value={props.about}
          ></input>
          <div>{props.errorMsg}</div>
          <button type="button" className="btn" onClick={props.onSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="info-section">
        <h1>
          {props.firstName.toUpperCase()} {props.lastName.toUpperCase()}
        </h1>
        <h2>{props.professionalTitle}</h2>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.about}</p>
        <button
          type="button"
          className="info-section__edit"
          onClick={props.onEdit}
        >
          Edit
        </button>
      </div>
    );
  }
}
