import Info from "./components/Info";
import Experience from "./components/Experience";
import Education from "./components/Education";
import React from "react";
import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";
import Header from "./components/Header";

function Main() {
  const [submit, setSubmit] = React.useState(false);

  function submitAll() {
    setSubmit(true);
  }

  function unSubmitAll() {
    setSubmit(false);
  }

  function newInfo() {
    return {
      firstName: "",
      lastName: "",
      location: "",
      professionalTitle: "",
      email: "",
      phone: "",
      about: "",
      linkedIn: "",
      submitted: false,
      errorMsg: "",
    };
  }

  const [info, setInfo] = React.useState(
    JSON.parse(localStorage.getItem("info")) || newInfo()
  );

  function handleChangeInfo(event) {
    const { name, value } = event.target;
    setInfo(prevInfo => {
      return { ...prevInfo, [name]: value };
    });
  }

  function validateInfoForm(info) {
    if (
      info.firstName === "" ||
      info.lastName === "" ||
      info.location === "" ||
      info.about === "" ||
      info.email === "" ||
      info.phone === ""
    ) {
      return false;
    } else {
      return true;
    }
  }

  function handleSubmitInfo() {
    const validation = validateInfoForm(info);
    if (validation === true) {
      setInfo(prevInfo => {
        return { ...prevInfo, submitted: true, errorMsg: "" };
      });
    } else {
      setInfo(prevInfo => {
        return { ...prevInfo, errorMsg: "Please fill in all required fields" };
      });
    }
  }

  function handleEditInfo() {
    setInfo(prevInfo => {
      return { ...prevInfo, submitted: false };
    });
  }

  React.useEffect(() => {
    localStorage.setItem("info", JSON.stringify(info));
  }, [info]);

  //EXPERIENCE SECTION
  const [experience, setExperience] = React.useState(
    JSON.parse(localStorage.getItem("experience")) || [newExperience()]
  );

  function newExperience() {
    return {
      position: "",
      employer: "",
      location: "",
      description: "",
      start: "",
      finish: "",
      submitted: false,
      id: nanoid(),
      errorMsg: "",
    };
  }

  function handleChangeExperience(event, id) {
    const { name, value } = event.target;
    const newExperience = [...experience];
    const selectedExperience = experience.find(experience => {
      return experience.id === id;
    });
    selectedExperience[name] = value;
    setExperience(newExperience);
  }

  function handleEditExperience(id) {
    const selectedExperience = experience.find(experience => {
      return experience.id === id;
    });
    const newArray = [...experience];
    selectedExperience.submitted = !selectedExperience.submitted;
    setExperience(newArray);
  }

  function validateExperienceForm(selectedExperience) {
    if (
      selectedExperience.position === "" ||
      selectedExperience.employer === "" ||
      selectedExperience.location === "" ||
      selectedExperience.description === "" ||
      selectedExperience.start === "" ||
      selectedExperience.finish === ""
    ) {
      return false;
    } else {
      return true;
    }
  }

  function handleSubmitExperience(event, id) {
    event.preventDefault();
    const selectedExperience = experience.find(experience => {
      return experience.id === id;
    });
    const validated = validateExperienceForm(selectedExperience);
    if (validated === true) {
      const newArray = [...experience];
      selectedExperience.errorMsg = "";
      selectedExperience.submitted = true;
      setExperience(newArray);
    } else {
      selectedExperience.errorMsg = "Please fill in all required fields";
      setExperience([...experience]);
    }
  }

  function handleDeleteExperience(id) {
    const selectedExperience = experience.find(experience => {
      return experience.id === id;
    });
    const newExperience = experience.filter(experience => {
      return experience !== selectedExperience;
    });
    setExperience(newExperience);
  }

  function handleAddExperience() {
    const newExperienceItem = newExperience();
    setExperience(prevExp => [...prevExp, newExperienceItem]);
  }

  React.useEffect(() => {
    localStorage.setItem("experience", JSON.stringify(experience));
  }, [experience]);

  const experienceElements = experience.map(experience => {
    return (
      <Experience
        handleChange={handleChangeExperience}
        position={experience.position}
        description={experience.description}
        employer={experience.employer}
        location={experience.location}
        start={experience.start}
        finish={experience.finish}
        submitted={experience.submitted}
        onSubmit={handleSubmitExperience}
        onEdit={handleEditExperience}
        onAdd={handleAddExperience}
        onDelete={handleDeleteExperience}
        key={experience.id}
        id={experience.id}
        previewMode={submit}
        errorMsg={experience.errorMsg}
      />
    );
  });

  //EDUCATION SECTION

  function newEducation() {
    return {
      school: "",
      location: "",
      qualification: "",
      startDate: "",
      finishDate: "",
      submitted: false,
      id: nanoid(),
      errorMsg: "",
      linkedIn: "",
    };
  }

  const [education, setEducation] = React.useState(
    JSON.parse(localStorage.getItem("education")) || [newEducation()]
  );

  const educationElements = education.map(education => {
    return (
      <Education
        school={education.school}
        location={education.location}
        qualification={education.qualification}
        startDate={education.startDate}
        finishDate={education.finishDate}
        key={education.id}
        submitted={education.submitted}
        onSubmit={handleSubmitEducation}
        handleChange={handleChangeEducation}
        id={education.id}
        onEdit={handleEditEducation}
        onAdd={handleAddEducation}
        onDelete={handleDeleteEducation}
        previewMode={submit}
        errorMsg={education.errorMsg}
      />
    );
  });

  function handleChangeEducation(event, id) {
    const { name, value } = event.target;
    const newEducation = [...education];
    const selectedEducation = education.find(education => {
      return education.id === id;
    });
    selectedEducation[name] = value;
    setEducation(newEducation);
  }

  function validateEducationForm(selectedEducation) {
    if (
      selectedEducation.school === "" ||
      selectedEducation.qualification === "" ||
      selectedEducation.location === "" ||
      selectedEducation.description === "" ||
      selectedEducation.startDate === "" ||
      selectedEducation.finishDate === ""
    ) {
      return false;
    } else {
      return true;
    }
  }

  function handleSubmitEducation(id) {
    const selectedEducation = education.find(education => {
      return education.id === id;
    });
    const validated = validateEducationForm(selectedEducation);
    const newEducationArray = [...education];
    if (validated === true) {
      selectedEducation.submitted = true;
      setEducation(newEducationArray);
    } else {
      selectedEducation.errorMsg = "Please fill in all required fields";
      setEducation([...education]);
    }
  }

  function handleEditEducation(id) {
    const selectedEducation = education.find(education => {
      return education.id === id;
    });
    const newEducationArray = [...education];
    selectedEducation.submitted = false;
    setEducation(newEducationArray);
  }

  function handleAddEducation() {
    const newEducationItem = newEducation();
    setEducation(prevEducation => [...prevEducation, newEducationItem]);
  }

  function handleDeleteEducation(id) {
    const selectedEducation = education.find(education => {
      return education.id === id;
    });
    const newEducation = education.filter(education => {
      return education !== selectedEducation;
    });
    setEducation(newEducation);
  }

  React.useEffect(() => {
    localStorage.setItem("education", JSON.stringify(education));
  }, [education]);

  function resetForm() {
    setInfo(newInfo());
    setEducation([newEducation()]);
    setExperience([newExperience()]);
  }

  return (
    <div className="Main">
      <Header />
      {!submit && (
        <div className="container">
          <h1>Fill in your details</h1>
          <Info
            handleChange={handleChangeInfo}
            firstName={info.firstName}
            lastName={info.lastName}
            email={info.email}
            location={info.location}
            professionalTitle={info.professionalTitle}
            phone={info.phone}
            about={info.about}
            linkedIn={info.linkedIn}
            submitted={info.submitted}
            onSubmit={handleSubmitInfo}
            onEdit={handleEditInfo}
            previewMode={submit}
            errorMsg={info.errorMsg}
          />
          <hr />
          <div className="section-header">
            <h2 className="experience-section--heading">Employment History</h2>
            <button className="btn btn__new" onClick={handleAddExperience}>
              + Add New Employment History
            </button>
          </div>
          {experienceElements}

          <div className="section-header">
            <h2>Education</h2>
            <button className="btn btn__new" onClick={handleAddEducation}>
              + Add New Education
            </button>
          </div>
          {educationElements}
          <div className="btn-container--main">
            <button onClick={resetForm} className="btn btn-reset">
              RESET ALL
            </button>
            {!submit && (
              <button
                type="button"
                className="btn btn__new"
                onClick={submitAll}
              >
                PREVIEW
              </button>
            )}
          </div>
        </div>
      )}
      {submit && (
        <div className="cv">
          <header className="cv-header">
            <h1 className="cv-header--heading">
              {info.firstName.toUpperCase()} {info.lastName.toUpperCase()}
            </h1>
            <h3>{info.professionalTitle.toUpperCase()}</h3>
          </header>
          <div className="cv-body">
            <div className="cv-grid__left">
              <div className="cv-contact">
                <h2 className="cv-heading">CONTACT</h2>
                <p>{info.phone}</p>
                <p>{info.email}</p>
                <p>{info.location}</p>
                <p>{info.linkedIn}</p>
              </div>

              <div className="cv-education">
                <h2 className="cv-heading">EDUCATION</h2>
                {educationElements}
              </div>
            </div>

            <div className="cv-grid__right">
              <div className="cv-about">
                <h2 className="cv-heading">PROFILE</h2>
                <p>{info.about}</p>
              </div>
              <div className="cv-work-experience">
                <h2 className="cv-heading">WORK EXPERIENCE</h2>
                {experienceElements}
              </div>
            </div>
          </div>
          {submit && (
            <div className="btn-container__back">
              <button type="button" onClick={unSubmitAll}>
                BACK
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Main;
