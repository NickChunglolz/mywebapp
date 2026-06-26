const CAREER_START = new Date("2019-07-01");

export const yearsShipping = Math.floor(
  (Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000),
);
