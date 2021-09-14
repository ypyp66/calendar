import { SET_DATE, SET_SELECTED_DATE } from "./types";

export const setDate = (moment) => ({ type: SET_DATE, payload: moment });

export const setSelectedDate = (moment) => ({
  type: SET_SELECTED_DATE,
  payload: moment,
});
