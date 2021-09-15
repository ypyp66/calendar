const MakeAllDates = (today, selectedDate) => {
  //moment는 시작 주와 끝 주를 구해서 date들을 print한다.
  const result = []; //week를 담을 배열
  const startWeek = today.clone().startOf("month").week();

  //항상 6개 week를 보여줄 예정이므로 endWeek 는 startWeek + 5
  const endWeek = today.clone().startOf("month").week() + 5;

  for (let i = startWeek; i <= endWeek; i++) {
    for (let j = 0; j < 7; j++) {
      const targetDate = today //1일이 포함된 주의 시작일을 기준으로 하루씩 더해나간다.
        .clone()
        .startOf("year")
        .week(i)
        .startOf("week")
        .add(j, "day");

      targetDate.isSelected = targetDate.format("YYYYMMDD") === selectedDate;
      result.push(targetDate);
    }
  }

  return result;
};

export default MakeAllDates;
