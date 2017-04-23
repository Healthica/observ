import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Header, Body, Left, Right, Button, Title, Icon, Text } from 'native-base'

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
        {
          this.props.actions &&
          <Right>
            {
              this.props.actions.map((action, i) => {
                return (
                  <Button key={i} onPress={action.cb} transparent >
                    {
                      action.text &&
                      <Text>{action.text}</Text>
                    }
                    {
                      action.icon &&
                      <Icon name={action.icon} />
                    }
                  </Button>
                )
              })
            }
          </Right>
        }
      </Header>
    )
  }
}
