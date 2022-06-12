if (4 == 9) {
  console.log("aaaaaaaaaaa");
} else {
  console.log("error");
}

const number = 50;
if (number < 49) {
  console.log("error");
} else if (number > 100) {
  console.log("too much");
} else {
  console.log("ok");
}

number === 50 ? console.log("ok") : console.log("error");

const number2 = '50';

switch (number2) {
  case 49:
    console.log("false");
    break;
  case 51:
    console.log("false");
    break;
  case 50:
    console.log("true");
    break;

  default:  console.log("not this time");
    break;
}
