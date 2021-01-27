
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Header } from "components/Header.js";

import { Home } from "./pages/Home.js";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { VideoList } from "./pages/VideoList";
import { About } from "./pages/About";


export const App = () => {
  return (
    <>
      <BrowserRouter>
      <div className='navbar'>
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
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
