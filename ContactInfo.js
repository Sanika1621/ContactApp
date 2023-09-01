class ContactInfo {

    static id = 0
    constructor(typeofcontactinfo, valueofcontactinfo) {
        this.typeofcontactinfo = typeofcontactinfo
        this.valueofcontactinfo = valueofcontactinfo
        this.id = ContactInfo.id++

    }

    static createContactinfo(typeofcontactinfo, valueofcontactinfo) {
        if (typeof typeofcontactinfo != 'string') {
            throw new Error('Invalid parameter')
        }
        if (typeof valueofcontactinfo != 'number' && typeof valueofcontactinfo != 'string') {
            throw new Error('Invalid parameter')
        }
        return new ContactInfo(typeofcontactinfo, valueofcontactinfo)
    }

    updateTypeofContactInfo(parameter, newValue) {
        if (typeof parameter != 'string') {
            throw new Error('Invalid parameter')
        }
        if (typeof newValue != 'string') {
            throw new Error('Invalid parameter')
        }
        this.typeofcontactinfo = newcontent
    }
    updateValueofContactInfo(parameter, newValue) {
        if (typeof parameter != 'string') {
            throw new Error('Invalid parameter')
        }
        if (typeof newValue != 'string') {
            throw new Error('Invalid parameter')
        }
        this.valueofcontactinfo = newcontent

    }
}

module.exports = ContactInfo
