import moment from "moment";
import { useEffect, useState } from "react";
import { TODAY } from "../Constants/Date";

const CalendarService = () => {
  const [year, setYear] = useState(TODAY.YEAR);
  const [month, setMonth] = useState(TODAY.MONTH);
  const [current, setCurrent] = useState(() => moment());
  const today = current;

  useEffect(() => {
    console.log("month", month);
  }, [month]);

  useEffect(() => {
    console.log("today", today);
  }, [today]);

  const goToday = () => {
    setCurrent(() => moment());
  };

  const increaseMonth = () => {
    setCurrent((prevCurrent) => prevCurrent.clone().add(1, "month"));
  };

  const decreaseMonth = () => {
    setCurrent((prevCurrent) => prevCurrent.clone().subtract(1, "month"));
  };
  return {
    today,
    year,
    month,
    increaseMonth,
    decreaseMonth,
    setYear,
    setMonth,
    goToday,
  };
};

export default CalendarService;
