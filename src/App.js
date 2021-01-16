import React from "react";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import { Home, Privacy } from "./pages";
import { fullNavbar as Navbar } from "./components";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="undernav">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/privacy" exact={true} component={Privacy} />
        </Switch>
      </div>
    </div>
  );
}
