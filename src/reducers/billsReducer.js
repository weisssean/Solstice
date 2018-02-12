import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function compare(a, b) {
  if(a.year === b.year){
    if (a.month < b.month){
      return -1;
    }else if(a.month > b.month)
      return 1;
  }
  else if (a.year < b.year)
    return -1;
  else if (a.year > b.year)
    return 1;
  else
    return 0;
}

export default function billsReducer(state = initialState.bills, action) {
  let bills =[];
  switch (action.type) {
    case types.LOAD_BILLS_SUCCESS:
      bills = action.bills.sort(compare);
      action.bills.sort(compare).map(b=>b.id = `${b.month}_${b.year}`);
      return Object.assign([], bills);
    case types.CREATE_BILL_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.bills)
      ].sort(compare);
    case types.UPDATE_BILL_SUCCESS:
      return [
        ...state.filter(bill => bill.billId !== action.bill.billId),
        Object.assign({}, action.bill)
      ].sort(compare);
    default:
      return state.sort(compare);
  }
}
