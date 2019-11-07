import request from "superagent";

export const EVENTS_FETCHED = "EVENTS_FETCHED";

const baseUrl = "http://localhost:4000";

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
});

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events.length) return;

  // a GET /events request
  request(`${baseUrl}/event`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body));
    })
    .catch(console.error);
};

export const EVENT_FETCHED = "EVENT_FETCHED";

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
});

export const loadEvent = id => (dispatch, getState) => {
  console.log("state event", getState().event);
  if (getState().event) return;

  console.log("loadEvent");

  request(`${baseUrl}/event/${id}`)
    //.then(console.log("get to request", `${baseUrl}/event/${id}`))
    .then(response => {
      //     console.log("response", response.body);
      dispatch(eventFetched(response.body));
      console.log("PREloadEvent", getState());
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
