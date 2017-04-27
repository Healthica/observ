import React, { Component } from 'react'
import { Body, Button, List, Card, ListItem, Text, Icon } from 'native-base'
import { MKButton, MKColor } from 'react-native-material-kit'

export default class DropdownMenu extends Component {
  render() {
    return (
      <Card style={this.props.style}>
        {
          this.props.items.map((item, i) => {
            return (
              <ListItem key={i} onPress={item.cb}>
                <Icon name={item.icon} />
                <Body>
                  <Text>{ item.text }</Text>
                </Body>
              </ListItem>
            )
          })
        }
      </Card>
    )
  }
}
