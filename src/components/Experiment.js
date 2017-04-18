import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class Experiment extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};
  }

  render() {
    return (
      <View>
        <Text>
          Experiment #{this.props.data.id}
        </Text>
        <Text>
          {this.props.data.title}
        </Text>
      </View>
    );
  }
}
