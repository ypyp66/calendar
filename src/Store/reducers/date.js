import moment from "moment";
import { SET_DATE } from "Store/actions/types";

const initialState = {
  date: moment(),
};

export default function date(state = initialState, action) {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
}
