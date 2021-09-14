import moment from "moment";
import { SET_DATE, SET_SELECTED_DATE } from "../actions/types";

const initialState = {
  date: moment(),
  selectedDate: null,
};

export default function date(state = initialState, action) {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };
    default:
      return state;
  }
}
