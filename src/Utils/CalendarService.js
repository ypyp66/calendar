import moment from "moment";
import { useEffect, useState } from "react";

const CalendarService = () => {
  const [current, setCurrent] = useState(() => moment());
  const today = current;

  useEffect(() => {
    console.log("today", today);
  }, [today]);

  const goToday = () => {
    setCurrent(() => moment());
  };

  const increaseMonth = () => {
    setCurrent((prev) => prev.clone().add(1, "month"));
  };

  const decreaseMonth = () => {
    setCurrent((prev) => prev.clone().subtract(1, "month"));
  };
  return {
    today,
    setCurrent,
    increaseMonth,
    decreaseMonth,
    goToday,
  };
};

export default CalendarService;
