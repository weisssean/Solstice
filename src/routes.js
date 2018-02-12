import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import Info from './components/common/Info';
import UserPage from "./components/user/UserPage";
import BillsPage from "./components/Bills/BillsPage";
import AllBillsPage from "./components/Bills/AllBillsPage";

export default (
  <Switch>
    <Route path="/" exact component={HomePage}/>
    <Route path="/bill/:id" component={BillsPage}/>
    <Route path="/allbills" component={AllBillsPage}/>
    <Route path="/about" component={Info}/>
    <Redirect to="/"/>
  </Switch>
);
