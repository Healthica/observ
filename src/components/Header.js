import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/action-creators'

import { Actions } from 'react-native-router-flux'
import { Body, Button, Drawer, Header, Icon, Left, Right, Text, Title, View } from 'native-base'
import { MKButton, MKColor } from 'react-native-material-kit'

class AppHeader extends Component {
  openDrawer() {
    this.props.dispatch(actionCreators.openDrawer())
  }

  render() {
    const big = this.props.big || false
    return (
      <Header style={big ? style.bigHeader : {}}>
        {
          this.props.noLeftActions !== true &&
          <Left style={big ? style.bigLeft : {}}>
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
        <Body style={big ? style.bigBody : {}}>
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

const style = {
  bigHeader: {
    height: 120
  },
  bigLeft: {
    position: 'absolute',
    top: 4,
    left: 8
  },
  bigBody: {
    marginLeft: 40
  },
  miniFab: {
    width: 40,
    height: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default connect()(AppHeader)
