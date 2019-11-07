import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import EventsListContainer from "./components/EventsListContainer";
import CreateEventForm from "./components/CreateEventFormContainer";
import EventDetailContainer from "./components/EventDetailContainer";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route exact path="/" component={EventsListContainer} />
          <Route exact path="/" component={CreateEventForm} />
          <Route exact path="/event/:id" component={EventDetailContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
