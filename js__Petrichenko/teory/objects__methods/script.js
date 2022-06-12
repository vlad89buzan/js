const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log("test");
  },
};
options.makeTest();
console.log(Object.keys(options).length);


//destructorizatciya object
const {border,bg} = options.colors;
console.log(border);
