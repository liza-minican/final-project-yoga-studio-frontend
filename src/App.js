
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { Header } from "components/Header.js";
import { Home } from "./pages/Home.js";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { VideoList } from "./pages/VideoList";
import { VideoInfo } from "./pages/VideoInfo";
import { About } from "./pages/About";


export const App = () => {
  let history = useHistory();
  return (
    <>
      <BrowserRouter>
        <div className="navbar">
          <Header />
        </div>
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
          <Route path="/videos/:videoId" exact>
            <VideoInfo />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
