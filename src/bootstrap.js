import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import thunk from 'redux-thunk';

import rootReducers from "./reducers";


const createStoreWithMiddleware = createStore( rootReducers, applyMiddleware(thunk)
// const  createStoreWithMiddleware = applyMiddleware(ReduxThunk)
(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore))));

import "./style/main.scss";

import Home from "./components/home";
import Results from "./components/results.js";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducers)}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/results' component={Results}/>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
export default rootReducers;
