import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/action-creators'

import { Actions } from 'react-native-router-flux'
import { Body, Button, Drawer, Header, Icon, Left, Right, Text, Title } from 'native-base'

class AppHeader extends Component {
  openDrawer() {
    this.props.dispatch(actionCreators.openDrawer())
  }

  render() {
    return (
      <Header>
        {
          this.props.noLeftActions !== true &&
          <Left>
              {
                this.props.showMenu === true &&
                <Button transparent onPress={() => { this.openDrawer() }}>
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
        }
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

export default connect()(AppHeader)
