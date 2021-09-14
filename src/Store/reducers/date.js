import moment from "moment";
import { SET_DATE, SET_TODAY } from "../actions/types";

const initialState = {
  date: moment(),
  today: new Date(),
};

export default function date(state = initialState, action) {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case SET_TODAY:
      return {
        ...state,
        today: action.payload,
      };
    default:
      return state;
  }
}
