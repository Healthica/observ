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

export default class Experiments extends Component {
  navigateToWelcome() {
    Actions.welcome()
  }

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.title}>
          Experiments
        </Text>
        <Button
          title="New Experiment"
          onPress={Actions.experimentCreate}
        />
        <Button
          title="View Experiment"
          onPress={Actions.experimentView}
        />
      </View>
    )
  }
}
