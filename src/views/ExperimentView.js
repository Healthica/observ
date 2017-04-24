import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import * as actionCreators from '../store/action-creators'
import { Container, Button, Content, Text } from 'native-base'
import Header from '../components/Header'
import _find from 'lodash/find'

class ExperimentEdit extends Component {
  constructor(props) {
    super(props)
    this.experiment = _find(this.props.experiments, { id: this.props.experimentId }) || {
      title: ''
    }
  }

  onDelete() {
    this.props.dispatch(actionCreators.deleteExperiment(this.props.experimentId))
    Actions.experiments({
      direction: 'leftToRight'
    })
  }

  onEdit() {
    Actions.experimentEdit({ experiment: this.experiment })
  }

  render() {
    return (
      <Container>
        <Header title={ this.experiment.title } />
        <Content>
          <Text>
            {JSON.stringify(this.experiment, null, 2)}
          </Text>
          <Button onPress={() => {this.onDelete()}} >
            <Text>
              Delete Experiment
            </Text>
          </Button>
          <Button onPress={() => { this.onEdit()}} >
            <Text>
              Edit Experiment
            </Text>
          </Button>
        </Content>
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
