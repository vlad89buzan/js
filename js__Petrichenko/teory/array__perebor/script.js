//filter vozvrashaet novui massiv

const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];

const shortNames = names.filter(function (name) {
  return name.length < 5;
});
console.log(shortNames);

//map vozvrashaet novui massiv s izmenenumi danumi
const answers = ["IvAn", "AnnA", "Hello"];
const result = answers.map((item) => item.toLowerCase());
console.log(result);

//some vozvrashet true ili false esli 1 element sootsvestvuet usloviu

const some = [4, "fgfg", "rtyrt"];
console.log(some.some((item) => typeof item === "number"));

//every vozvrashet true ili false esli vse elementu sootsvestvuet usloviu
console.log(some.every((item) => typeof item === "number"));

//reduce sobiraet array v odno edinoe cteloe
const arr = [4, 5, 1, 3, 2, 6];

console.log(arr.reduce((first, current) => first - current));

const object = {
  ivan: "person",
  ann: "person",
  dog: "animal",
  cat: "animal",
};

const newArray = Object.entries(object)
  .filter((item) => item[1] === "person")
  .map((item) => item[0]);
console.log(newArray);
