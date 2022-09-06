import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/app.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/properties" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
