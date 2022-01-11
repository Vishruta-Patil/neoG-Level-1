const minDate = (date1, date2) => {
  const year1 = date1.slice(-4);
  const year2 = date2.slice(-4);

  const month1 = date1.slice(3, 5);
  const month2 = date2.slice(3, 5);

  const day1 = date1.slice(0, 2);
  const day2 = date2.slice(0, 2);

  if (year1 > year2) return date2;
  else if (year1 < year2) return date1;

  if (month1 > month2) return date2;
  else if (month1 < month2) return date1;

  if (day1 > day2) return date2;
  else if (day1 < day2) return date1;
};

console.log(minDate('02/05/2021', '24/01/2021'));
