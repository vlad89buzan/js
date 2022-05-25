
class People {
  /**
   *
   * @param {*} fio
   * @param {*} birthday
   * @param {*} numbers
   * @param {*} room
   */
  constructor(fio, birthday, numbers, room) {
    let name = fio.toLowerCase().split(" ");
    this.name = {};
    this.name.f = name[0][0].toUpperCase() + name[0].slice(1);
    this.name.i = name[1][0].toUpperCase() + name[1].slice(1);
    this.name.o = name[2][0].toUpperCase() + name[2].slice(1);

    let date = birthday.split(".");
    this.date = {};
    this.date.d = +date[0];
    this.date.m = +date[1];
    this.date.y = +date[2];

    // let phone = numbers.split(",");
    // this.numbers = [];
    // for (let i = 0; i < phone.length; index++) {
    //   this.numbers.push(phone[i]);
    // }
    this.numbers = numbers.split(", ");
    this.room = +room;

    
  }
  
  getFio() {
    return `${this.name.f} ${this.name.i} ${this.name.o}`
}

}

let people1 = new People(
  "buzan vladyslav olekseevich",
  "25.12.1989",
  "9984, 5656",
  542
);
