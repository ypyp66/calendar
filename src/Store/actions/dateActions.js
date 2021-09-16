import { SET_DATE, SET_SELECTED_DATES } from "./types";

export const setDate = (moment) => ({ type: SET_DATE, payload: moment });
export const setSelectedDates = (moment) => ({
  type: SET_SELECTED_DATES,
  payload: moment,
});
