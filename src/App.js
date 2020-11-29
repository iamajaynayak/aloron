import React from "react";

import Homepage from "./Pages/Homepage/Homepage.jsx";

import About from "./Components/About/About.jsx";

import { Route, Switch } from "react-router-dom";

import AdminPage from "./Pages/AdminPage/AdminPage.jsx";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </div>
  );
};

export default App;
