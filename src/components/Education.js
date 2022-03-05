export default function Education(props) {
  if (props.submitted === false) {
    return (
      <div className="education-section">
        {!props.previewMode && (
          <form>
            <input
              type="text"
              name="school"
              placeholder="School name"
              value={props.school}
              onChange={event => props.handleChange(event, props.id)}
            ></input>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={props.location}
              onChange={event => props.handleChange(event, props.id)}
            ></input>
            <input
              type="text"
              name="qualification"
              placeholder="Qualification"
              value={props.qualification}
              onChange={event => props.handleChange(event, props.id)}
            ></input>
            <span className="education-section__dates">
              <input
                type="text"
                name="startDate"
                placeholder="Start date"
                value={props.startDate}
                onChange={event => props.handleChange(event, props.id)}
              ></input>
              <input
                type="text"
                name="finishDate"
                placeholder="Finish Date"
                value={props.finishDate}
                onChange={event => props.handleChange(event, props.id)}
              ></input>
            </span>
            <div>{props.errorMsg}</div>
            <button
              type="button"
              className="education-section__submit"
              onClick={event => props.onSubmit(props.id)}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn__delete"
              onClick={event => props.onDelete(props.id)}
            >
              Delete
            </button>
          </form>
        )}
      </div>
    );
  } else {
    return (
      <div className="cv-education--element">
        <h3>{props.school}</h3>
        <h4>{props.location}</h4>
        <p>{props.qualification}</p>
        <p>
          {props.startDate} - {props.finishDate}
        </p>
        {!props.previewMode && (
          <div className="education-btns">
            <button
              type="button"
              className="education-section__edit"
              onClick={event => props.onEdit(props.id)}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn__delete"
              onClick={event => props.onDelete(props.id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}
