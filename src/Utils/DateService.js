import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import MOMENT from "Constants/Moment";

import MakeAllDates from "./MakeAllDates";
import { setDate, setSelectedDates } from "Store/actions/dateActions";

const DateService = () => {
  const today = useSelector((state) => state.date.date);
  const selectedDates = useSelector((state) => state.date.selectedDates);
  const [allDates, setAllDates] = useState(() => MakeAllDates(today));
  const dispatch = useDispatch();

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
              currentMoment.isSelected = true;
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

  const toggleAllSelectedDates = useCallback(
    () =>
      allDates
        .filter((item) => item.isSelected === true)
        .map((item) => item.id),
    [allDates]
  );

  const toggleAllDate = useCallback((date) => {
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
  }, []);

  const changeMonth = useCallback(
    (date) => {
      const currentMoment = date.format(MOMENT.YEARMONTH);
      const targetMoment = today.format(MOMENT.YEARMONTH);

      if (currentMoment !== targetMoment) {
        dispatch(setDate(moment(date)));
        dispatch(setSelectedDates(date.id));
      }
    },
    [dispatch, today]
  );

  const clickDate = useCallback(
    (date) => {
      changeMonth(date);

      if (selectedDates === date.id) return;
      toggleDate(date);
    },
    [changeMonth, toggleDate, selectedDates]
  );

  const loadAllDates = useCallback(() => {
    setAllDates(MakeAllDates(today, selectedDates));
  }, [today]);

  useEffect(() => {
    dispatch(setSelectedDates(toggleAllSelectedDates()));
  }, [allDates, dispatch, toggleAllSelectedDates]);

  useEffect(() => {
    loadAllDates();
  }, [loadAllDates]);

  return {
    today,
    allDates,
    resetAllDates,
    clickDate,
    toggleAllDate,
    toggleAllSelectedDates,
  };
};

export default DateService;
