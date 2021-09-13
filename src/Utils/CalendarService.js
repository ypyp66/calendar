import { useState } from "react";
import TODAY from "../Constants/Date";

const CalendarService = () => {
  const [year, setYear] = useState(TODAY.YEAR);
  const [month, setMonth] = useState(TODAY.MONTH);

  return {
    year,
    month,
    setMonth,
  };
};

export default CalendarService;
