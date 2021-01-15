import React from "react";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages";
import { fullNavbar as Navbar } from "./components";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="undernav">
        <Switch>
          <Route path="/" exact={true} component={Home} />
        </Switch>
      </div>
    </div>
  );
}
