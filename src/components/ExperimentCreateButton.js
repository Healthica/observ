import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { ListItem, Body, Left, Right, Text, Icon, View } from 'native-base'

export default class ExperimentCreateButton extends Component {
  render() {
    return (
      <ListItem
        onPress={() => { Actions.experimentCreate({
          experiment: {
            title: '',
            form: [
              {
                id: 1,
                question: 'How do you feel?',
                type: 'scale',
                options: {
                  min: 0,
                  max: 10,
                  minLabel: '',
                  maxLabel: ''
                }
              }
            ],
            settings: {}
          }
        })}}
        >
        <Icon name={this.props.data.icon} />
        <Body>
          <Text>{ this.props.data.title }</Text>
          <Text note>{ this.props.data.description }</Text>
        </Body>
        <Right>
          <Icon ios='ios-add' android="md-add" />
        </Right>
      </ListItem>
    )
  }
}
