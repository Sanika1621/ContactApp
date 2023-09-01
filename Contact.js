const ContactInfo = require("./ContactInfo.js")


class Contact {

    static id = 0
    constructor(name) {
        this.name = name,
            this.ContactInfo = [],
            this.id = Contact.id++
    }

    static newContact(name) {
        if (typeof name != 'string') {
            throw new Error("Enter valid input")
        }
        return new Contact(name)

    }

    updateContact(parameter, newValue) {
        if (typeof parameter != 'string') {
            throw new Error('Invalid parameter')
        }
        if (typeof newValue != 'string') {
            throw new Error('Invalid parameter')
        }S
        switch (parameter) {
            case 'name':
                this.#updateName(parameter, newValue)//?
                break
            default: throw new Error('No such parameter')
        }
    }

    #updateName(parameter, newcontent) {

        if (typeof parameter != 'string') {
            throw new Error('Enter valid parameter')
        }
        this.name = newcontent


    }

    createContactinfo(typeofcontactinfo, valueofcontactinfo) {
        let newcontactinfo = ContactInfo.createContactinfo(typeofcontactinfo, valueofcontactinfo)
        this.ContactInfo.push(newcontactinfo)
        return newcontactinfo
    }

    getAllContactinfobyid() {
        return this.ContactInfo
    }
    #findContactinfo(contactidinfo) {
        if (typeof contactidinfo != 'number') {
            throw new Error('Invalid userid')
        }
        for (let index = 0; index < this.ContactInfo.length; index++) {
            if (contactidinfo == this.ContactInfo[index].id) {
                return [this.ContactInfo[index], index]
            }

        }
        return [null, -1]
    }
    deleteContactinfobyid(contactinfoid) {
        let [FoundContactinfo, getContactindex] = this.#findContactinfo(contactinfoid)
        if (getContactindex == -1) {
            throw new Error('contactinfoid not found')
        }
        this.ContactInfo.splice(getContactindex, 1)
    }


    updateContactinfobyid(contactinfoid, parameter, newcontent) {
        let [FoundContactinfo, getContactindex] = this.#findContactinfo(contactinfoid)
        if (FoundContactinfo == null) {
            throw new Error('Contact info id not found')
        }
        switch (parameter) {
            case 'typeofcontactinfo':
                FoundContactinfo.updateTypeofContactInfo(parameter, newcontent)
                break
            case 'valueofcontactinfo':
                FoundContactinfo.updateValueofContactInfo(parameter, newcontent)
                break
            default:
                throw new Error('No such parameter')
        }


    }
}

module.exports = Contact
