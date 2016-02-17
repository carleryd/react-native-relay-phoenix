import React from 'react-native';
import Relay from 'react-relay';

var {
  Navigator,
  TouchableHighlight,
  StyleSheet,
  BackAndroid,
  Text,
  View,
} = React;

class FixApp extends React.Component {
  render() {
    return (
      <View style={styles.view}>
          <Text>{this.props.store.authors[0].id}</Text>
          <Text>{this.props.store.authors[0].name}</Text>
      </View>
    );
  }
}

export default Relay.createContainer(FixApp, {
  fragments: {
    store: () => Relay.QL`
      fragment on Store {
        authors{
          name
          id
        }
      }
    `,
  },
});

var styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: 'blue',
  },
});
