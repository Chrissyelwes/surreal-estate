import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/app.css";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
