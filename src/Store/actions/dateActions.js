import { SET_DATE } from "./types";

export const setDate = (moment) => ({ type: SET_DATE, payload: moment });
