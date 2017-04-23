import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Container, Content, Button, Text, Form, Item, Input, Label, Picker, Fab, Icon, ActionSheet, View } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import Header from '../components/Header'
import FormItem from '../components/FormItem'

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
      { title: 'Dropdown', type: 'dropdown' },
      { title: 'Counter', type: 'counter' },
      { title: 'Scale', type: 'scale' }
    ]
    ActionSheet.show(
      {
        options: options.map(o => { return o.title }),
        title: 'Add Question'
      },
      (buttonIndex) => {
        this.addFormItem(options[buttonIndex])
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
              return <FormItem key={n} {...data} />
            })
          }
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
