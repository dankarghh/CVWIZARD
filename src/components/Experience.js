export default function Experience(props) {
  if (props.submitted === false && !props.previewMode) {
    return (
      <div className="experience-section">
        <form>
          <input
            type="text"
            name="position"
            placeholder="Position"
            onChange={event => props.handleChange(event, props.id)}
            value={props.position}
            required={true}
          ></input>
          <input
            type="text"
            name="employer"
            placeholder="Employer"
            onChange={event => props.handleChange(event, props.id)}
            value={props.employer}
          ></input>
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={event => props.handleChange(event, props.id)}
            value={props.location}
          ></input>
          <span className="experience-section__dates">
            <input
              type="text"
              name="start"
              placeholder="From"
              onChange={event => props.handleChange(event, props.id)}
              value={props.start}
            ></input>
            <input
              type="text"
              name="finish"
              placeholder="To"
              onChange={event => props.handleChange(event, props.id)}
              value={props.finish}
            ></input>
          </span>
          <input
            type="text"
            name="description"
            placeholder="Job description"
            onChange={event => props.handleChange(event, props.id)}
            value={props.description}
          ></input>
          <div className="errorMsg">{props.errorMsg}</div>
          <button
            type="submit"
            className="experience-section__submit"
            onClick={event => props.onSubmit(event, props.id)}
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
      </div>
    );
  } else if (props.submitted) {
    return (
      <div className="experience-section">
        <h3>{props.position}</h3>
        <h4>{props.employer}</h4>
        <p>
          {" "}
          {props.location} | {props.start} - {props.finish}
        </p>
        <p>{props.description}</p>
        {!props.previewMode && (
          <div className="btn">
            <button
              type="button"
              className="btn"
              onClick={event => props.onEdit(props.id)}
            >
              Edit
            </button>
            <button
              className="btn btn__delete"
              type="button"
              onClick={event => props.onDelete(props.id)}
            >
              Delete
            </button>
          </div>
        )}
        <hr></hr>
      </div>
    );
  } else {
    return <div></div>;
  }
}
