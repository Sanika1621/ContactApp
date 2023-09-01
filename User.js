const Contact = require("./Contact.js")

class User {
    static id = 0
    static allUsers = []
    constructor(name, age, gender, isAdmin) {
        this.isAdmin = isAdmin;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.id = User.id++
        this.contact = []
    }

    static newAdmin(name, age, gender) {
        try {
            if (typeof name != 'string') {
                throw new Error("Invalid Name")
            }
            if (typeof age != 'number') {
                throw new Error("Invalid Age")
            }
            if (gender != 'M' && gender != 'F') {
                throw new Error("Invalid Gender")
            }
            return new User(name, age, gender, true)
        }
        catch (error) {
            console.log(error.Message)
        }
    }
    newUser(name, age, gender) {
        try {
            if (typeof name != 'string') {
                throw new error("Invalid Name")
            }
            if (typeof age != 'number') {
                throw new error("Invalid Age")
            }
            if (gender != 'M' && gender != 'F') {
                throw new error("Invalid Gender")
            }
            if (!this.isAdmin) {
                throw new Error("Not an Admin")
            }
            let newUser = new User(name, age, gender, false)
            User.allUsers.push(newUser)
            return newUser
        }
        catch (error) {
            console.log(error.Message)
        }
    }

    getAllUsers() {
        try {

            if (!this.isAdmin) {
                throw new Error("Not an Admin")
            }
            return User.allUsers
        }
        catch (error) {
            Console.log(error.Message)
        }
    }
    static findUser(userId) {
        for (let index = 0; index < User.allUsers.length; index++) {
            if (userId == User.allUsers[index].id) {
                return [User.allUsers[index], index]
            }
        }

        return [null, -1]
    }


    #updateName(newValue) {
        if (typeof newValue != 'string') {
            throw new error("Invalid name value")
        }
        this.name = newValue
    }
    #updateAge(newValue) {
        if (typeof newValue != 'number') {
            throw new error("Invalid name value")
        }
        this.name = newValue
    }
    #updateGender(newValue) {
        if (typeof newValue != 'string') {
            throw new error("Invalid name value")
        }
        this.name = newValue
    }

    updateUser(userId, parameter, newValue) {
        try {

            if (!this.isAdmin) {
                throw new Error("Not an Admin")
            }
            let [userToBeUpdated, indexOfUser] = User.findUser(userId)

            if (userToBeUpdated == null) {
                throw new error("user not found")
            }
            switch (parameter) {
                case 'name': userToBeUpdated.#updateName(newValue)
                    break;
                case 'age': userToBeUpdated.#updateAge(newValue)
                    break;
                case 'gender': userToBeUpdated.#updateGender(newValue)
                    break;
                default:
                    throw new Error("Invalid parameter");
                    break;
            }
            return userToBeUpdated
        }
        catch (error) {
            console.log(error.Message)
        }
    }
    deleteUser(userId) {
        try {
            if (!this.isAdmin) {
                throw new Error("Not an Admin")
            }
            let [userToBeDeleted, indexOfUser] = User.findUser(userId)


            if (userToBeDeleted == null) {
                throw new Error("user not found")
            }

            User.allUsers.splice(userToBeDeleted[index], 1)
            return `${userId}`
        }

        catch (error) {
            console.log(error.Message)
        }
    }
    createContact(name) {
        try {
            if (this.isAdmin) {
                throw new Error('you are an admin')
            }
            if (typeof name != 'string') {
                throw new Error("Invalid parameter")
            }
            let newContact = Contact.newContact(name)
            this.contact.push(newContact)

        }
        catch (error) {
            console.log(error.message)
        }

    }
    getAllContact() {
        try {
            if (this.isAdmin) {
                throw new Error('you are an admin')
            }
            return this.contact
        }
        catch (error) {
            console.log(error.message)
        }
    }
    #findContact(contactId) {

        for (let index = 0; index < this.contacts.length; index++) {
            if (contactId == this.contacts[index].id) {
                return [this.contacts[index], index]
            }
        }
        return[null,-1]

    }
    updateContact(contactId, parameter, newValue) {
        try {
            if (this.isAdmin) {
                throw new Error('you are an admin')
            }
            if(contactId<0 || typeof contactId != "number"){
                throw new Error('Invalid contactId')
            }
            let[foundContact,indexOfContact] = this.#findContact(contactId)
            if(foundContact == null){
                throw new Error('contact not found')
            }
            return userToBeUpdated;

        }
        catch(error){
            console.log(error.message)
            return null;
        }
    }
    deleteContact(contactId){
        try{
            if(this.isAdmin){
                throw new Error('you are admin')
            }
            if(typeof contactId != "number"){
                throw new Error("Invalid Parameter")
            }
            let indexOfContact = this.#findContact(contactId)
            this.contacts.splice(indexOfContact,1)
        }
        catch(error){
            console.log(error.message)
        }
    }
    createContactInfo(typeofContact,valueofContact){
        try{
            if(this.isAdmin){
                throw new Error('you are admin')
            }
            let[foundContact,indexOfContact] = this.#findContact(ContactId)
            if (foundContact == null){
                throw new Error('Contact not found')
            }
            foundContact.createContactInfo(typeofContact,valueofContact)
        }
        catch(error){
           console.log(error.message)
        }

    }
    getAllContactinfobyid(contactid){
        try {
            if(this.isAdmin){
                throw new Error('Only user can delete contact')
            }
            if(typeof contactid != 'number'){
                throw new Error('Enter valid input')
            }
            let [FoundContact,getContactindex]=this.#findContact(contactid)
            let allcontactinfo=FoundContact.getAllContactinfobyid()
            return allcontactinfo

        } catch (error) {
            console.log(error.message);
        }
    }

    updateContactinfobyid(contactid,contactinfoid,parameter,newcontent){
        try {
            if(this.isAdmin){
                throw new Error('Only user can delete contact')
            }
            if(typeof contactid != 'number'){
                throw new Error('Enter valid input')
            }
            if(typeof contactinfoid != 'number'){
                throw new Error('Enter valid input')
            }
            
            let [FoundContact,getContactindex]=this.#findContact(contactid)
            if(FoundContact ==  null){
                throw new Error('Contact id not found')
            }
            FoundContact.updateContactinfobyid(contactinfoid,parameter,newcontent)
            
        } catch (error) {
            console.log(error.message);
        }
    }
    
    deleteContactinfobyid(contactid,contactinfoid){
        try {
            if(this.isAdmin){
                throw new Error('Only user can delete contact')
            }
            if(typeof contactid != 'number'){
                throw new Error('Enter valid input')
            }
            if(typeof contactinfoid != 'number'){
                throw new Error('Enter valid input')
            }

            let [FoundContact,getContactindex]=this.#findContact(contactid)
            if(FoundContact ==  null){
                throw new Error('Contact id not found')
            }
            FoundContact.deleteContactinfobyid(contactinfoid)

        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = User
    
    
