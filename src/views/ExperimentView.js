import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import * as actionCreators from '../store/action-creators'
import { ActionSheet, Container, Button, Content, Text } from 'native-base'
import { MKButton, MKColor } from 'react-native-material-kit'

import Header from '../components/Header'
import AddMeasurementModal from '../components/AddMeasurementModal'

import _find from 'lodash/find'

class ExperimentEdit extends Component {
  constructor(props) {
    super(props)
    this.experiment = _find(this.props.experiments, { id: this.props.experimentId }) || {
      title: ''
    }
    this.state = {
      measurementModalVisible: false
    }
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

  addMeasurement(measurement) {
    alert(JSON.stringify(measurement))
    this.hideMeasurementModal()
    // this.setState({ ...this.state, measurement })
  }
  showMeasurementModal() {
    this.setState({ ...this.state, measurementModalVisible: true })
  }
  hideMeasurementModal() {
    this.setState({ ...this.state, measurementModalVisible: false })
  }

  render() {
    return (
      <Container>
        <Header title={ this.experiment.title } big miniFab={{ cb: () => { this.showMeasurementModal() }}} />
        <Content style={{ padding: 16 }}>
          {
            false &&
            <Text style={{ fontSize: 10 }}>
              {JSON.stringify(this.experiment, null, 2)}
            </Text>
          }
          <Text style={style.title}>Measurements</Text>
          <MKButton
            onPress={() => {this.showMeasurementModal()}}
            backgroundColor={MKColor.LightBlue} style={style.smallButton}>
            <Text style={style.smallButtonText}>
              Add Measurement
            </Text>
          </MKButton>
          <Text style={style.title}>Results</Text>
          <MKButton
            onPress={() => {}}
            backgroundColor={MKColor.LightBlue} style={style.smallButton}>
            <Text style={style.smallButtonText}>
              Show Results
            </Text>
          </MKButton>
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
        <AddMeasurementModal
          visible={this.state.measurementModalVisible}
          hide={() => { this.hideMeasurementModal() }}
          form={this.state.form}
          save={(measurement) => { this.addMeasurement(measurement) }} />
      </Container>
    )
  }
}

const style = {
  title: {
    fontSize: 18,
    color: '#999',
    marginTop: 20,
    marginBottom: 10
  },
  smallButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: 120,
    borderRadius: 2
  },
  smallButtonText: {
    color: '#fff',
    fontSize: 12
  }
}

const mapStateToProps = (state) => {
  return {
    experiments: state.experiments
  }
}
const ConnectedExperimentEdit = connect(mapStateToProps)(ExperimentEdit)
export default ConnectedExperimentEdit
