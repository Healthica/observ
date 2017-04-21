import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Header, Body, Left, Button, Title, Icon } from 'native-base'

export default class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
            {
              this.props.showMenu === true &&
              <Button transparent>
                <Icon name='menu' />
              </Button>
            }
            {
              this.props.showMenu !== true &&
              <Button transparent onPress={() => { Actions.pop() }}>
                <Icon name='arrow-back' />
              </Button>
            }
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
      </Header>
    )
  }
}
