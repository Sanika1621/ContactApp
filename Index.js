 const User = require("./User.js")

const admin = User.newAdmin("Sanika",22,'F')
const user1 = admin.newUser("Richa",22,"F")
const user2 = admin.newUser("ABC",22,"F")
let contact1 = user1.createContact("Deep")
let contact2 = user2.createContact("Sky")
// console.log(admin)
// console.log(user1)

//getallUsers
console.log(admin.getAllUsers())

//updateUser
admin.updateUser(1,'name','XYZ')
console.log(user1)

//deleteUser
admin.deleteUser(1)


