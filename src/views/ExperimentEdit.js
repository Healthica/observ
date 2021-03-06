import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import * as actionCreators from '../store/action-creators'
import { ActionSheet, Button, Container, Content, Fab, Icon, Text, View } from 'native-base'
import { MKTextField } from 'react-native-material-kit'
import _pick from 'lodash/pick'
import uuid from 'uuid/v4'

import Header from '../components/Header'
import FormItemEdit from '../components/FormItemEdit'
import ExperimentSettingsModal from '../components/ExperimentSettings'
import ExperimentHelpModal from '../components/ExperimentHelpModal'

class ExperimentEdit extends Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({}, {
      helpModalVisible: props.experiments.length === 0,
      settingsModalVisible: false
    }, this.props.experiment)
  }

  addFormItem(item) {
    this.setState({
      form: [...this.state.form, item]
    })
  }

  hideHelpModal() {
    this.setState({ ...this.state, helpModalVisible: false })
  }

  showSettingsModal() {
    this.setState({ ...this.state, settingsModalVisible: true })
  }
  hideSettingsModal() {
    this.setState({ ...this.state, settingsModalVisible: false })
  }
  updateSettings(settings) {
    this.setState({ ...this.state, settings })
  }

  save() {
    if (this.state.id) {
      this.props.dispatch(actionCreators.updateExperiment({
        ..._pick(this.state, ['id', 'title', 'form', 'settings'])
      }))
    } else {
      const id = uuid()
      this.props.dispatch(actionCreators.addExperiment({
        id: id,
        status: 'active',
        form: [],
        settings: {},
        measurements: [],
        results: {},
        ..._pick(this.state, ['title', 'form', 'settings'])
      }))
    }
    Actions.pop()
  }

  openFabOptions() {
    const options = [
      {
        title: 'Dropdown',
        item: {
          question: '',
          type: 'dropdown',
          options: [
            'Option 1'
          ]
        }
      }, {
        title: 'Counter',
        item: {
          question: '',
          type: 'counter'
        }
      }, {
        title: 'Scale',
        item: {
          question: '',
          type: 'scale',
          options: {
            min: 1,
            max: 5,
            minLabel: '',
            maxLabel: ''
          }
        }
      }
    ]
    ActionSheet.show(
      {
        options: options.map(o => { return o.title }),
        title: 'Add Question'
      },
      (buttonIndex) => {
        this.addFormItem(options[buttonIndex].item)
      }
    )
  }

  render() {
    const headerActions = [
      {
        icon: 'md-settings',
        cb: () => { this.showSettingsModal() }
      }, {
        text: 'Save',
        cb: () => { this.save() }
      }
    ]
    return (
      <Container>
        <Header title={this.state.title || "New Experiment"} actions={headerActions}/>
        <Content padder>
          <MKTextField
            placeholder="Experiment Name"
            selectTextOnFocus={true}
            onChangeText={(text) => this.setState({ title: text })}
            style={{ flex: 1, marginBottom: 20 }}
            textInputStyle={{ fontSize: 20 }}
            value={this.state.title}
          />
          {
            this.state.form.map((data, n) => {
              return <FormItemEdit key={n} {...data}
                onChange={item => {
                  const newState = this.state.form.slice()
                  newState[n] = item
                  this.setState({ form: newState })
                }}
                onDelete={() => {
                  const newState = this.state.form.slice()
                  newState.splice(n, 1)
                  this.setState({ form: newState })
                }}
              />
            })
          }
          <View style={{ height: 120 }}></View>
        </Content>
        <Fab
          active={false}
          containerStyle={{ marginLeft: 10 }}
          style={{ backgroundColor: '#5067FF' }}
          onPress={() => {this.openFabOptions()}}>
          <Icon name="md-add" />
        </Fab>
        <ExperimentHelpModal
          visible={this.state.helpModalVisible}
          hide={() => { this.hideHelpModal() }}/>
        <ExperimentSettingsModal
          visible={this.state.settingsModalVisible}
          hide={() => { this.hideSettingsModal() }}
          settings={this.state.settings}
          save={(settings) => { this.updateSettings(settings) }} />
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
