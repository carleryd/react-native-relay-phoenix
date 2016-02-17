var babelRelayPlugin   = require('babel-relay-plugin');
var introspectionQuery = require('graphql/utilities').introspectionQuery;
var request            = require('sync-request');

var url = 'http://localhost:4000/graphql';

var response = request('POST', url, {
   qs: {
      query: introspectionQuery
   }
});

var schema = JSON.parse(response.body.toString('utf-8'));

var fs = require('fs');
fs.writeFile(__dirname+"/../data/schema.json", JSON.stringify(schema, null, 2) , function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
