
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home.js";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { VideoList } from "./pages/VideoList";
import { About } from "./pages/About";
import { NavBar } from "./components/NavBar.js";

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users" exact>
            <SignUp />
          </Route>
          <Route path="/sessions" exact>
            <Login />
          </Route>
          <Route path="/videos" exact>
            <VideoList />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
