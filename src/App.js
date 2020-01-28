import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Message from "./components/message/message";
import Registration from "./components/registration/Registration";
import MessageForm from "./components/messageForm/MessageForm";
import MessagePage from "./pages/MessagePage";
import UsersPage from "./pages/UsersPage";
// import Profile from "./components/profile.js/Profile"

import 'bootstrap/dist/css/bootstrap.min.css';


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
            path="/registration"
            component={Registration}
          />
          <Route
            exact
            path="/messageform"
            component={MessageForm}
          />
          <Route
            exact
            path="/messagepage/:messageID"
            component={MessagePage}
          />
           <Route
            exact
            path="/userspage"
            component={UsersPage}
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
