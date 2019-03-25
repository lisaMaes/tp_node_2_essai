const express = require('express');
const pubService = require('tp_node_2_essai/services/pubs.services');
const app = express();

app.get('/pubs', function (req, res) {

    const pubs = pubService.getListPub();
    res.status(200);
    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify(pubs));
})
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});