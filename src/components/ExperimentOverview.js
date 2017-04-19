import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native'

export default class ExperimentOverview extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {Actions.experimentView({ experimentId: this.props.data.id })}}
        >
          <Text>
            {this.props.data.title}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
