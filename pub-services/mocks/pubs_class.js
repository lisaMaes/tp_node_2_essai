

class Pub {
    constructor(name, owner, openHours, openDays, beers){
        this.name = name
        this.owner = owner
        this.openHours = openHours
        this.openDays = openDays
        this.beers = beers
    }
}

class Owner{

    constructor(firstName, lastName, mail){
        this.firstName = firstName
        this.lastName = lastName
        this.mail = mail
    }
}

class OpenHours{
    constructor(start, end){
        this.start = start
        this.end = end
    }
}

class Beers{
    constructor(type, name){
        this.type = type
        this.name =name
    }
}

module.exports = {
    Pub : Pub,
    Owner : Owner,
    OpenHours : OpenHours,
    Beers :Beers,

}