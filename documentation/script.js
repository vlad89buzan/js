/**
 * function tansform stroku v minutu
 * @param {string} time time in format 02:08 beetween 00:00 24:00
 * @return (number) tceloe chislo 02:08 = 128
 */
function timeToMinute(time) {
  try {
    let hour = +time.split(":")[0];
    let minute = +time.split(":")[1];

    if (!(hour >= 0 && hour <= 23) || !(minute >= 0 && minute <= 59)) {
      throw new RangeError("error");
    }
    return hour * 60 + minute;
  } catch (error) {
    console.log(error);
  }
}
console.log(timeToMinute("02:34"));
