/*eslint-disable import/default */
import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import configureStore from "./store/configureStore.dev";
import {Provider} from "react-redux";
import {BrowserHistory, HashRouter, Route} from 'react-router-dom';
import App from './components/App';
import {loadBills,getUser} from "./actions/solsticeActions";
// import {loadAccount, loadUsers} from "./actions/usersActions";
import "./styles/style.css";
import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/toastr/build/toastr.min.css";

const store = configureStore();

store.dispatch(loadBills());
store.dispatch(getUser());

render(
  <Provider store={store}>
    <HashRouter history={BrowserHistory}>
      {/*<BrowserRouter >*/}
      <Route path="/" component={App}/>

    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
