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

class ExperimentCreate extends Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({}, {
      helpModalVisible: props.experiments.length === 0
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
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.helpModalVisible}
          onRequestClose={() => {this.hideHelpModal()}}
          >
          <View style={style.helpModalBackground}>
            <View style={style.helpModal}>
              <Text>
                An Experiment is a short form that you will fill in every day until the experiment is over.
              </Text>
              <Text>
                Customize the questions in the form and check the settings for different configurations.
              </Text>
              <Button style={style.helpModalButton} onPress={() => {this.hideHelpModal()}}>
                <Text>Got it</Text>
              </Button>
            </View>
          </View>
        </Modal>
      </Container>
    )
  }
}

const style = {
  helpModalBackground: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  helpModal: {
    width: 300,
    maxHeight: 260,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
  helpModalButton: {
    alignSelf: 'flex-end'
  }
}

const mapStateToProps = (state) => {
  return {
    experiments: state.experiments
  }
}
const ConnectedExperimentCreate = connect(mapStateToProps)(ExperimentCreate)
export default ConnectedExperimentCreate
