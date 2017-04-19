import React, { Component } from 'react'
import { connect } from 'react-redux'
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

import ExperimentOverview from '../components/ExperimentOverview'

class Experiments extends Component {
  render() {
    return (
      <View style={[styles.view, styles.titleSpace]}>
        {
          this.props.experiments.data.map((e) => {
            return <ExperimentOverview key={e.id} data={e} />
          })
        }
        <Button
          title="New Experiment"
          onPress={Actions.experimentCreate}
        />
      </View>
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
