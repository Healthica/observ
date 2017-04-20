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
    justifyContent: 'space-around'
  },
  experimentsPresetsShowMoreToggle: {
    marginBottom: 90
  }
}))

import ExperimentOverview from '../components/ExperimentOverview'
import ExperimentCreateButton from '../components/ExperimentCreateButton'

const minimumVisiblePresets = 6
const experimentsPresets = [
  {
    title: 'Blank',
    description: 'Create a completely custom experiment',
    image: 'blank'
  }, {
    title: 'Diet',
    description: 'Test different diets to meet your goals',
    image: 'diet'
  }, {
    title: 'A/B Test',
    description: 'Test multiple variants to find out what works best',
    image: 'ab-test'
  }, {
    title: 'Sleep',
    description: 'See how your sleep affects different aspects of your life',
    image: 'sleep'
  }, {
    title: 'Correlation',
    description: 'Find out how different events correlate over time',
    image: 'correlation'
  }, {
    title: 'Symptoms',
    description: 'Keep track of health symptoms and possible causes',
    image: 'exercise'
  }, {
    title: 'Breakfast',
    description: 'Which breakfast keeps you full the longest?',
    image: 'extra'
  }, {
    title: 'Allergy',
    description: 'Pinpoint the specific triggers of your allergy',
    image: 'extra'
  }, {
    title: 'Coffee',
    description: 'Test your caffeine dependence',
    image: 'extra'
  }, {
    title: 'Workout',
    description: 'What is your best pre-workout supplement?',
    image: 'extra'
  }
]

class Experiments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllPresets: false
    }
  }

  render() {
    return (
      <ScrollView style={styles.view}>
        <View style={styles.titleSpace}></View>
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
            experimentsPresets.map((e, i) => {
              if (this.state.showAllPresets === false && i >= minimumVisiblePresets) {
                return
              }
              return <ExperimentCreateButton key={i} data={e} />
            })
          }
        </View>
        <Button
           style={styles.experimentsPresetsShowMoreToggle}
          title={ this.state.showAllPresets ? 'Show less' : 'Show more' }
          onPress={() => {
            this.setState({ showAllPresets: !this.state.showAllPresets })
          }}
        />
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
