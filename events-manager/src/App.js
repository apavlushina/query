import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import EventsListContainer from "./components/EventsListContainer";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route exact path="/" component={EventsListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
