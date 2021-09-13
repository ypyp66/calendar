import { useEffect, useState } from "react";
import TODAY from "../Constants/Date";

const CalendarService = () => {
  const [year, setYear] = useState(TODAY.YEAR);
  const [month, setMonth] = useState(TODAY.MONTH);

  useEffect(() => {
    console.log("month", month);
  }, [month]);

  const IncreaseYear = () => {
    setYear((prevYear) => prevYear + 1);
  };

  const DecreaseYear = () => {
    setYear((prevYear) => prevYear - 1);
  };

  const IncreaseMonth = () => {
    setMonth((prevMonth) => {
      const nextMonth = (prevMonth % 12) + 1;
      if (nextMonth === 1) {
        IncreaseYear();
      }
      return nextMonth;
    });
  };

  const DecreaseMonth = () => {
    setMonth((prevMonth) => {
      const nextMonth = prevMonth - 1;
      if (nextMonth <= 0) {
        DecreaseYear();
        return 12;
      }
      return nextMonth;
    });
  };
  return {
    year,
    month,
    IncreaseMonth,
    DecreaseMonth,
    setYear,
    setMonth,
  };
};

export default CalendarService;
