import moment from "moment";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "Store/actions/dateActions";

const HeaderService = () => {
  const today = useSelector((state) => state.date.date);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("today", today, today.format());
  }, [today]);

  const goToday = useCallback(() => {
    dispatch(setDate(moment()));
  }, [dispatch]);

  const increaseMonth = useCallback(() => {
    dispatch(setDate(today.clone().add(1, "month")));
  }, [dispatch, today]);

  const decreaseMonth = useCallback(() => {
    dispatch(setDate(today.clone().subtract(1, "month")));
  }, [dispatch, today]);

  return {
    increaseMonth,
    decreaseMonth,
    goToday,
  };
};

export default HeaderService;
