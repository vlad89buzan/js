// let a =6;

// switch(a){
//     case 3:
//         console.log("les");
//         break;
//     case 4:
//         console.log("you are right");
//         break;
//     case 5:
//         console.log("more");
//         break;
// default:
//     console.log('no')

// }


const number = +prompt('enter the number beetween 0 and 3','');
switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;

    default:
        break;
}