var pubs= require('../mocks/pubs.json');
var classPub = require('../mocks/pubs_class');


function getListPub(){
    return pubs.map(element => {

        const beers = new classPub.Beers(element.beers.type, element.beers.name);
        const owner = new classPub.Owner(element.owner.firstName, element.owner.lastName, element.owner.mail);
        const openHours = new classPub.OpenHours(element.openHours.start, element.openHours.end);
        const openDays = element.openDays;


        return new classPub.Pub (element.name, owner, openHours, openDays, beers);
    });
}

module.exports = {
    getListPub : getListPub
};