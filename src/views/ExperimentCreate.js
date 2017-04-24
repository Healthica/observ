import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import * as actionCreators from '../store/action-creators'
import { ActionSheet, Button, Container, Content, Fab, Form, Icon, Input, Item, Text, View } from 'native-base'
import { Modal } from 'react-native'
import _pick from 'lodash/pick'
import uuid from 'uuid/v4'

import Header from '../components/Header'
import FormItemEdit from '../components/FormItemEdit'
import ExperimentSettingsModal from '../components/ExperimentSettings'
import ExperimentHelpModal from '../components/ExperimentHelpModal'

class ExperimentCreate extends Component {
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
        cb: () => {
          this.showSettingsModal()
        }
      }, {
        text: 'Save',
        cb: () => {
          const id = uuid()
          this.props.dispatch(actionCreators.addExperiment({
            id: id,
            status: 'active',
            form: [],
            settings: {},
            measurments: [],
            results: {},
            ..._pick(this.state, ['title', 'form', 'settings'])
          }))
          Actions.experiments({
            direction: 'leftToRight'
          }
        )}
      }
    ]
    return (
      <Container>
        <Header title={this.state.title || "New Experiment"} actions={headerActions}/>
        <Content padder>
          <Form>
            <Item>
              <Input
                placeholder="Experiment Name"
                onChangeText={(text) => this.setState({ title: text })}
                value={this.state.title}
              />
            </Item>
          </Form>
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
          save={(settings) => { }} />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    experiments: state.experiments
  }
}
const ConnectedExperimentCreate = connect(mapStateToProps)(ExperimentCreate)
export default ConnectedExperimentCreate
