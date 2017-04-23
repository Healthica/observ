import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Header, Body, Left, Right, Button, Title, Icon } from 'native-base'

export default class AppHeader extends Component {
  render() {
    let Actions
    if (this.props.actions !== undefined) {
      Actions = this.props.actions
    }
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
        {
          Actions &&
          <Right>
            <Actions />
          </Right>
        }
      </Header>
    )
  }
}
