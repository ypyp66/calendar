import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import MOMENT from "Constants/Moment";

import MakeAllDates from "./MakeAllDates";
import { setDate } from "Store/actions/dateActions";

const DateService = () => {
  const today = useSelector((state) => state.date.date);
  const [allDates, setAllDates] = useState(() => MakeAllDates(today));
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();

  const changeMonth = useCallback(
    (currentMoment) => {
      dispatch(setDate(moment(currentMoment)));
    },
    [dispatch]
  );

  const resetAllDates = useCallback(() => {
    setAllDates((prev) =>
      prev.map((item) => {
        const currentMoment = moment(item);
        currentMoment.isSelected = false;
        currentMoment.id = item.format(MOMENT.FULLDATE);

        return currentMoment;
      })
    );
  }, []);

  const toggleDate = useCallback((date) => {
    setAllDates((prev) =>
      prev.map((item) =>
        item.id === date.id
          ? (() => {
              const currentMoment = moment(date);
              currentMoment.isSelected = !item.isSelected;
              currentMoment.id = date.format(MOMENT.FULLDATE);

              return currentMoment;
            })()
          : (() => {
              const currentMoment = moment(item);
              currentMoment.isSelected = false;
              currentMoment.id = item.format(MOMENT.FULLDATE);

              return currentMoment;
            })()
      )
    );
  }, []);

  const toggleAllDate = (date) => {
    setAllDates((prev) =>
      prev.map((item) =>
        item.id === date.id
          ? (() => {
              const currentMoment = moment(date);
              currentMoment.isSelected = !date.isSelected;
              currentMoment.id = date.format(MOMENT.FULLDATE);

              return currentMoment;
            })()
          : item
      )
    );
  };

  const clickDate = useCallback(
    (date) => {
      const currentMoment = date.format(MOMENT.YEARMONTH);
      const targetMoment = today.format(MOMENT.YEARMONTH);

      if (currentMoment !== targetMoment) {
        changeMonth(currentMoment);
      }

      setSelectedDate(date.id);
      toggleDate(date);
    },
    [changeMonth, today, toggleDate]
  );

  const loadAllDates = useCallback(() => {
    console.log("loadAllDates");
    setAllDates(MakeAllDates(today, selectedDate));
  }, [today]);

  useEffect(() => {
    loadAllDates();
  }, [loadAllDates]);

  return {
    today,
    allDates,
    resetAllDates,
    clickDate,
    toggleAllDate,
  };
};

export default DateService;
