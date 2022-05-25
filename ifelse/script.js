let message = "privet, ";
if (5 > 1) {
  console.log(message);
}


let message2 = "privet, ";
let first = "10";
let second = "5";
if (first === second) {
  console.log(message2);
}
if ("") {
  console.log(message2);
}
if (1) {
  console.log(message2);
}


let message3 = "privet";
let number = 5;
if (number > 10) {
  console.log(message3);
} else {
  console.log("uslovie ne vupolneno");
}


let message4 = "privet";
let numbers = 30;
if (number > 50) {
  console.log(">50");
} else if (numbers > 30) {
  console.log(">30");
} else if (numbers > 10) {
  console.log(">10");
}


let message5 = "privet, ";
let messageEnd;
if (5 > 1) {
    messageEnd = "olya"
} else {
    messageEnd = "vasya"
}
message5 += messageEnd;
console.log(message5)


let message6 = "privet, ";
let messageEnd2 = (5 > 1) ? "vasya":"olya";
message6 += messageEnd2;
console.log(message6)