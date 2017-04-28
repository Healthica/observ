import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import * as actionCreators from '../store/action-creators'
import { ActionSheet, Card, CardItem, Container, Button, Content, Icon, Text } from 'native-base'
import { MKButton, MKColor } from 'react-native-material-kit'

import Header from '../components/Header'
import DropdownMenu from '../components/DropdownMenu'

import _find from 'lodash/find'

class ExperimentView extends Component {
  constructor(props) {
    super(props)
    this.experiment = _find(this.props.experiments, { id: this.props.experimentId }) || {
      title: ''
    }
    this.state = {
      menuVisible: false
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
    this.setState({ ...this.state, menuVisible: false })
    Actions.experimentEdit({ experiment: this.experiment })
  }

  toggleMenu() {
    this.setState({ ...this.state, menuVisible: !this.state.menuVisible })
  }

  navigateToAddMeasurement() {
    Actions.addMeasurement({ experiment: this.experiment })
  }

  render() {
    return (
      <Container>
        <Header title={ this.experiment.title } actions={[{ icon: 'md-more', cb: () => { this.toggleMenu() }}]} />
        <Content style={{ padding: 16 }}>
          {
            false &&
            <Text style={{ fontSize: 10 }}>
              {JSON.stringify(this.experiment, null, 2)}
            </Text>
          }
          <Text style={style.title}>Measurements</Text>
          <MKButton
            onPress={() => {this.navigateToAddMeasurement()}}
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
        </Content>
        {
          this.state.menuVisible &&
          <DropdownMenu style={style.menu}
            items={[{
              text: 'Edit',
              icon: 'md-create',
              cb: () => { this.onEdit() }
            }, {
              text: 'Delete',
              icon: 'md-trash',
              cb: () => { this.onDelete() }
            }]} />
        }
      </Container>
    )
  }
}

const style = {
  menu: {
    position: 'absolute',
    top: 40,
    right: 10,
    width: 160,
    padding: 0
  },
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
const ConnectedExperimentView = connect(mapStateToProps)(ExperimentView)
export default ConnectedExperimentView
