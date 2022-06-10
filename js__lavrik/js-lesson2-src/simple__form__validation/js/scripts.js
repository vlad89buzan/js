let form = document.querySelector("form");
let inputs = document.querySelectorAll(".check");

let patterns = {
  notEmpty: /.+/,
  phone: /^\d(7,15)$/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
};

form.addEventListener("submit", (e) => {
  let hasError = false;

  for (let i = 0; i < inputs.length; i++) {
    let pattern = patterns[inputs[i].dataset.valid];
    if (!pattern.test(inputs[i].value.trim())) {
      inputs[i].classList.add("err");
      hasError = true;
    }
  }
  if (hasError) {
    e.preventDefault();
  }
});

form.addEventListener("focusin", (e) => {
  if (e.target.classList.contains("check")) {
    e.target.classList.remove("err");
  }
});
