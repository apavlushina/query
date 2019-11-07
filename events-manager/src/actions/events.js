import request from "superagent";

export const EVENTS_FETCHED = "EVENTS_FETCHED";

const baseUrl = "http://localhost:4000";

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
});

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  console.log("events", getState().events);
  if (getState().events.length) return;
  console.log("after");

  // a GET /events request
  request(`${baseUrl}/event`)
    .then(response => {
      console.log("response", response);
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body));
    })
    .catch(console.error);
};

export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
});

export const createEvent = data => dispatch => {
  request
    .post(`${baseUrl}/event`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body));
    })
    .catch(console.error);
};
