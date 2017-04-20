import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native'

import {
  MKProgress,
} from 'react-native-material-kit'

import appStyles from '../styles/App'
const styles = StyleSheet.create(Object.assign({}, appStyles, {
  experimentOverview: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  experimentOverviewButton: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  experimentOverviewTitle: {
    fontSize: 20,
    marginBottom: 6
  },
  experimentOverviewProgressText: {
    fontSize: 12
  },
  experimentOverviewArrow: {
    fontSize: 30
  }
}))

export default class ExperimentOverview extends Component {
  render() {
    return (
      <View style={styles.experimentOverview}>
        <TouchableOpacity
          style={styles.experimentOverviewButton}
          onPress={() => {Actions.experimentView({ experimentId: this.props.data.id })}}
        >
          <View>
            <Text style={styles.experimentOverviewTitle}>
              {this.props.data.title}
            </Text>
            <Text style={styles.experimentOverviewProgressText}>
              {this.props.data.results.remainingDays} days left
            </Text>
            <MKProgress
              progress={this.props.data.results.progress}
            />
          </View>
          <Text style={styles.experimentOverviewArrow}>
            &rsaquo;
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
