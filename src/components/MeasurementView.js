import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { ListItem, Body, Icon, Right, Text } from 'native-base'

import moment from 'moment'

export default class MeasurementView extends Component {
  render() {
    return (
      <ListItem onPress={() => {
        // Actions.experimentView({ experimentId: this.props.data.id })
      }}>
        <Body>
          <Text note>
            {
              this.props.datetime &&
              moment(this.props.datetime).format("ddd, DD/MM h:mm A")
              ||
              JSON.stringify(this.props)
            }
          </Text>
        </Body>
        <Right>
          <Text note>
            {
              this.props.datetime &&
              moment(this.props.datetime).fromNow()
            }
          </Text>
        </Right>
      </ListItem>
    )
  }
}
