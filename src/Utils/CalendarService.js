import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../Store/actions/dateActions";

const CalendarService = () => {
  const today = useSelector((state) => state.date.date);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("today", today);
  }, [today]);

  const goToday = () => {
    dispatch(setDate(moment()));
  };

  const increaseMonth = () => {
    dispatch(setDate(today.clone().add(1, "month")));
    //dispatch((prev) => prev.clone().add(1, "month"));
  };

  const decreaseMonth = () => {
    dispatch(setDate(today.clone().subtract(1, "month")));
  };
  return {
    today,
    increaseMonth,
    decreaseMonth,
    goToday,
  };
};

export default CalendarService;
