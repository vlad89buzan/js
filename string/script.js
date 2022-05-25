var str1= 'hello world'

var personName  = 'victor'
var message = 'person name is "'+personName+'"';
var message2 ='person name is \'' + personName + '\'';
var message3 =`person name is  '${personName}'` ;
console.log(message3)

var newMessage = 'Hello world!!!'
console.log(newMessage.length)
console.log(newMessage.toUpperCase())
console.log(newMessage.toLowerCase())
console.log(newMessage.charAt(1))
console.log(newMessage.indexOf('world'))
console.log(newMessage.indexOf('worlde'))
console.log(newMessage.substr(2,4))
console.log(newMessage.substr(newMessage.indexOf('world'),5))
console.log(newMessage.substring(1,3))