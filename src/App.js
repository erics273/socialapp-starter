import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Message from "./components/message/message"
// import Profile from "./components/profile/Profile"

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/profile/:username"
            component={Profile}
          />
          <Route
            exact
            path="/message"
            component={Message}
          />
          <Route
            exact
            path="/profile"
            component={Profile}
          />
          <Route
            exact
            path="*"
            component={NotFound}
          />
          
      </Switch>
    );
  }
}

export default App;
