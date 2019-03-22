var pubService = require('tp_node_2_essai/services/pubs.services');

function getListPub(){

    return pubService.getListPub();
}




module.exports = {
    pubService : pubService,
    getListPub: getListPub
};