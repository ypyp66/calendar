import { SET_DATE, SET_TODAY } from "./types";

export const setDate = (moment) => ({ type: SET_DATE, payload: moment });

export const setToday = (new_date) => ({ type: SET_TODAY, payload: new_date });
