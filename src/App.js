import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { Header } from "components/Header.js";
import { Footer } from "components/Footer";

import { Home } from "./pages/Home.js";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { VideoList } from "./pages/VideoList";
import { VideoInfo } from "./pages/VideoInfo";
import { About } from "./pages/About";
import { UserProfile } from "./pages/UserProfile";

import { user } from "./reducers/user";

const reducer = combineReducers({ user: user.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <>
      <Provider store={store}>
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
            <Route path="/profile" exact>
              <UserProfile />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
};
