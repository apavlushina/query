import React from "react";
import { Link } from "react-router-dom";

export default class EventsList extends React.Component {
  render() {
    if (!this.props.events) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <h1>All Events</h1>
          <ul>
            {this.props.events.map(event => {
              return (
                <li key={event.id}>
                  <Link to={`/event/${event.id}`}>{event.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}

// Create the EventsList that renders
//  an <li> in an <ul> for every event.
//  Inside the <li> a <Link> (from react-router-dom)
//  should be used to link to another page located on /event/:id.
//  When there are no events yet,
// just display the text 'Loading...'.
