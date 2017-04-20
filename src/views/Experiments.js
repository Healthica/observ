import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Text,
  StyleSheet,
  ScrollView,
  View
} from 'react-native'

import appStyles from '../styles/App'
const styles = StyleSheet.create(Object.assign({}, appStyles, {
  experimentsNewTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 20
  },
  experimentsPresetsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 90
  }
}))

import ExperimentOverview from '../components/ExperimentOverview'
import ExperimentCreateButton from '../components/ExperimentCreateButton'

const experimentsPresets = [
  {
    id: 1,
    title: 'Blank',
    description: 'Create a completely custom experiment',
    image: 'blank'
  }, {
    id: 2,
    title: 'Diet',
    description: 'Test different diets to meet your goals',
    image: 'diet'
  }, {
    id: 3,
    title: 'A/B Test',
    description: 'Test multiple variants to find out what works best',
    image: 'ab-test'
  }, {
    id: 4,
    title: 'Sleep',
    description: 'See how your sleep affects different aspects of your life',
    image: 'sleep'
  }, {
    id: 5,
    title: 'Correlation',
    description: 'Find out how different events correlate over time',
    image: 'correlation'
  }, {
    id: 6,
    title: 'Symptoms',
    description: 'Keep track of health symptoms and possible causes',
    image: 'exercise'
  }
]

class Experiments extends Component {
  render() {
    return (
      <ScrollView style={[styles.view, styles.titleSpace]}>
        {
          this.props.experiments.data.map((e) => {
            return <ExperimentOverview key={e.id} data={e} />
          })
        }
        <Text style={styles.experimentsNewTitle}>
          Start a new experiment
        </Text>
        <View style={styles.experimentsPresetsContainer}>
          {
            experimentsPresets.map((e) => {
              return <ExperimentCreateButton key={e.id} data={e} />
            })
          }
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    experiments: state.experiments
  }
}
const ConnectedExperiments = connect(mapStateToProps)(Experiments)
export default ConnectedExperiments
