import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { ListItem, Body, Right, Text, Icon } from 'native-base'

export default class ExperimentOverview extends Component {
  render() {
    return (
      <ListItem onPress={() => {
        Actions.experimentView({ experimentId: this.props.data.id })
      }}>
        <Body>
          <Text>{this.props.data.title}</Text>
          {
            this.props.data.results && this.props.data.results.remainingDays &&
            <Text note>{this.props.data.results.remainingDays} days left</Text> ||
            <Text note>New experiment</Text>
          }
        </Body>
        <Right>
          <Icon ios='ios-arrow-forward' android="md-arrow-round-forward" />
        </Right>
      </ListItem>
    )
  }
}
