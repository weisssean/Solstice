import * as types from "./actionTypes";
import solsticeApi from "../api/solsticeApi";
import {beginAjaxCall} from "./ajaxStatusActions";

export function loadBillsSuccess(bills) {
  return {type: types.LOAD_BILLS_SUCCESS, bills};
}
export function loadUserSuccess(user) {
  return {type: types.LOAD_USER_SUCCESS, user};
}

export function loadBills() {

  return function (dispatch) {
    dispatch(beginAjaxCall());

    return solsticeApi.getAllBills().then(bills => {
      dispatch(loadBillsSuccess(bills));
    }).catch(error => {
      throw(error);
    });
  };
}
export function getUser() {

  return function (dispatch) {
    dispatch(beginAjaxCall());

    return solsticeApi.getUser().then(user => {
      dispatch(loadUserSuccess(user));
    }).catch(error => {
      throw(error);
    });
  };
}
