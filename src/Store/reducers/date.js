import moment from "moment";
import { SET_DATE, SET_SELECTED_DATES } from "Store/actions/types";

const initialState = {
  date: moment(),
  selectedDates: [],
};

export default function date(state = initialState, action) {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case SET_SELECTED_DATES:
      return {
        ...state,
        selectedDates: action.payload,
      };
    default:
      return state;
  }
}
