window.addEventListener("load", function () {
  let inp1 = document.querySelector(".inp1");
  let inp2 = document.querySelector(".inp2");
  let btn = document.querySelector(".go");
  let res = document.querySelector(".res");
  let select = this.document.querySelector("select");

  let calcFn = {
    sum: (a, b) => a + b,
    sub: (a, b) => a - b,
    mult: (a, b) => a * b,
    div: (a, b) => a / b,
  };

  btn.addEventListener("click", function () {
    let num1 = parseInt(inp1.value);
    let num2 = parseInt(inp2.value);
   
   let total = calcFn[select.value](num1, num2);

    // if (op === "sum") {
    //   total = num1 + num2;
    // } else if (op === "sub") {
    //   total = num1 - num2;
    // } else if (op === "mult") {
    //   total = num1 * num2;
    // } else if (op === "div") {
    //   total = num1 / num2;
    // }

    if (isNaN(total)) {
      total = "Заполните поля - введите нормальные числа";
    }

    res.innerHTML = total;
    btn.disabled = true;
  });
  [inp1, inp2, select].forEach((el) => el.addEventListener("input", btnEnable));
  function btnEnable() {
    btn.disabled = false;
  }
  [inp1, inp2].forEach((el) => el.addEventListener("input", cleanInput));
  function cleanInput() {
    this.value = this.value.replace(/[^\d]/g, "");
  }
});
