import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import * as actionCreators from '../store/action-creators'
import { Container, Button, Text } from 'native-base'
import Header from '../components/Header'
import _find from 'lodash/find'

class ExperimentEdit extends Component {
  onDelete() {
    this.props.dispatch(actionCreators.deleteExperiment(this.props.experimentId))
    Actions.experiments({
      direction: 'leftToRight'
    })
  }

  render() {
    const experiment = _find(this.props.experiments, { id: this.props.experimentId }) || {
      title: ''
    }
    return (
      <Container>
        <Header title={ experiment.title } />
        <Text>
          {JSON.stringify(experiment, null, 2)}
        </Text>
        <Button onPress={() => {this.onDelete()}} >
          <Text>
            Delete Experiment
          </Text>
        </Button>
        <Button onPress={Actions.experimentEdit} >
          <Text>
            Edit Experiment
          </Text>
        </Button>
      </Container>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    experiments: state.experiments
  }
}
const ConnectedExperimentEdit = connect(mapStateToProps)(ExperimentEdit)
export default ConnectedExperimentEdit
