const today = new Date();

export const TODAY = {
  TODAY: today,
  YEAR: today.getFullYear(),
  MONTH: today.getMonth() + 1,
  DATE: today.getDate(),
};

export const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
