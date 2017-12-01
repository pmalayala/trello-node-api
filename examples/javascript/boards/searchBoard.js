var apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
var oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

var trelloNode = require('../../../lib/trello-node-api')(apiKey, oauthToken);

var boardRequest = function () {
    trelloNode.board.search('BOARD_ID').then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });
};

boardRequest();