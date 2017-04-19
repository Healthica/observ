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

export default class ExperimentView extends Component {
  render() {
    return (
      <View style={[styles.view, styles.titleSpace]}>
        <Text style={styles.title}>
          { this.props.experimentId }
        </Text>
        <Button
          title="Edit Experiment"
          onPress={Actions.experimentEdit}
        />
      </View>
    )
  }
}
