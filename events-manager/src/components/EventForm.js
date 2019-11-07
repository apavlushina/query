import React from "react";

export default function EventForm(props) {
  console.log("props", props);
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={props.values.name}
          onChange={props.onChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={props.values.description}
          onChange={props.onChange}
        />
      </label>
      <label>
        Date:
        <input
          type="number"
          name="date"
          value={props.values.date}
          onChange={props.onChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
