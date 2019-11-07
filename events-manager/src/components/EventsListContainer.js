import React from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import EventsList from "./EventsList";

class EventsListContainer extends React.Component {
  componentDidMount() {
    console.log("mount test");
    this.props.loadEvents();
  }

  render() {
    console.log("this.props.events", this.props.events);
    return <EventsList events={this.props.events} />;
  }
}

const mapStateToProps = state => ({
  events: state.events
});

export default connect(
  mapStateToProps,
  { loadEvents }
)(EventsListContainer);
