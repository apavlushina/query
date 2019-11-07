export default (state = [], action = {}) => {
  console.log("action test:", action);
  switch (action.type) {
    case "EVENTS_FETCHED":
      console.log("action.events", action.events);
      return action.events;
    default:
      return state;
  }
};
