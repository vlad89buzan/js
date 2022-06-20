function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}
User.prototype.exit = function () {
  console.log(`polzovatel ${this.name} ushel`);
};

const vlad = new User("vlad", 28);
const aleks = new User("aleks", 30);

vlad.hello();
aleks.hello();

console.log(vlad);
console.log(aleks);
