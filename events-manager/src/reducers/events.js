export default (state = [], action = {}) => {
  console.log("action test:", action.type);
  switch (action.type) {
    case "EVENTS_FETCHED":
      return action.events;
    case "EVENT_FETCHED":
      console.log("action event", action.event);
      return action.event;
    default:
      return state;
  }
};
