/* @flow */
'use strict';

import React from 'react-native';
import Relay from 'react-relay';
import FixApp from './src/components/FixApp';
import ViewerRoute from './src/routes/ViewerRoute';
import config from './config';

Relay.injectNetworkLayer(
  // graphqlURL: "http://192.168.0.110:3000/graphql",
  new Relay.DefaultNetworkLayer(config.graphqlURL, {
    credentials: 'same-origin',
  })
);

var {
  AppRegistry,
} = React;

class fix extends React.Component {
  render() {
    return (
        <Relay.RootContainer
           Component={FixApp}
           route={new ViewerRoute()}
        />
    );
  }
}

AppRegistry.registerComponent('fix', () => fix);
