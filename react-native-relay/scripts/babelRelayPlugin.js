var getbabelRelayPlugin = require('babel-relay-plugin');
var schema = require('../data/schema.json');

module.exports = getbabelRelayPlugin(schema.data);
/*
var babelRelayPlugin   = require('babel-relay-plugin');
var introspectionQuery = require('graphql/utilities').introspectionQuery;
var request            = require('sync-request');

var url = 'http://192.168.0.110:4000/graphql';

var response = request('POST', url, {
   qs: {
      query: introspectionQuery
   }
});

var schema = JSON.parse(response.body.toString('utf-8'));

module.exports = babelRelayPlugin(schema.data, {
   abortOnError: true,
});
*/
