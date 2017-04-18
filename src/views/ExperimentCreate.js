import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import {
  Button,
  Text,
  StyleSheet,
  View
} from 'react-native'

import appStyles from '../styles/App'
const styles = StyleSheet.create(Object.assign({}, appStyles, {
  
}))

export default class ExperimentCreate extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.title}>
          New Experiment
        </Text>
        <Button
          title="Create"
          onPress={Actions.experiments}
        />
      </View>
    )
  }
}
