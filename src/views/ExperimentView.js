import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import * as actionCreators from '../store/action-creators'
import { Container, Button, Content, Text } from 'native-base'

import Header from '../components/Header'
import FormItem from '../components/FormItem'

import _find from 'lodash/find'

class ExperimentEdit extends Component {
  constructor(props) {
    super(props)
    this.experiment = _find(this.props.experiments, { id: this.props.experimentId }) || {
      title: ''
    }
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
    this.experiment = _find(nextProps.experiments, { id: nextProps.experimentId }) || {
      title: ''
    }
    this.setState(this.state)
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
        <Header title={ this.experiment.title } big miniFab={{ cb: () => { alert('hi') }}} />
        <Content>
          <Text style={{ fontSize: 10 }}>
            {JSON.stringify(this.experiment, null, 2)}
          </Text>
          {
            this.experiment.form.map((data, n) => {
              return <FormItem key={n} {...data} />
            })
          }
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
