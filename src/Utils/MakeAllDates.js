import { EndOfDate } from "../Constants/Date";

const MakeAllDatess = (year, month) => {
  //month를 받아옴
  //1일의 시작 요일을 알아냄
  //마지막 날짜의 요일을 알아냄
  const prevMonthEndDate = new Date(year, month - 1, 0).getDate();
  // year % 4 === 0 //윤년 검사
  //   ? EndOfDate.leapYear[month - 2] //index감소, month감소, 합 2감소
  //   : EndOfDate.normalYear[month - 2];
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDay = new Date(year, month, 0).getDay();
  const endDate = new Date(year, month, 0).getDate();
  const result = [];

  console.log(
    "firstDay",
    firstDay,
    "lastDay",
    lastDay,
    "prevMonthEndDate",
    prevMonthEndDate
  );

  const prevMonthDates = [];
  //이전 달 부분 구하기
  for (let i = firstDay - 1; i >= 0; i--) {
    prevMonthDates.push(prevMonthEndDate - i);
  }

  //이번 달 부분 구하기
  const thisMonth = [];
  for (let i = 1; i <= endDate; i++) {
    thisMonth.push(i);
  }

  //다음 달 부분 구하기
  const nextMonthDates = [];
  for (let i = 0; i < 6 - lastDay; i++) {
    nextMonthDates.push(1 + i);
  }

  const temp = [...prevMonthDates, ...thisMonth, ...nextMonthDates];

  for (let i = 0; i < 7; i++) {
    result.push(temp.splice(0, 7));
  }

  return result;
};

const MakeAllDates = (today) => {
  //moment는 시작 주와 끝 주를 구해서 print한다.
  console.log("weekday", today.clone().startOf("month").week());
};

export default MakeAllDates;
