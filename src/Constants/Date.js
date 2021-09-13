const today = new Date();

export const TODAY = {
  TODAY: today,
  YEAR: today.getFullYear(),
  MONTH: today.getMonth() + 1,
};

export const EndOfDate = {
  leapYear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  normalYear: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
};
