import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Container, Content, Button, Text, Form, Item, Input, Label, Picker, Fab, Icon, ActionSheet, View } from 'native-base'
import Header from '../components/Header'
import FormItemEdit from '../components/FormItemEdit'

export default class ExperimentCreate extends Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({}, this.props.experiment)
  }

  addFormItem(item) {
    this.setState({
      form: [...this.state.form, item]
    })
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
          type: 'scale'
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
        cb: () => {Actions.experiments({
          direction: 'leftToRight'
        })}
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
      </Container>
    )
  }
}
