import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/action-creators'

import { ScrollView } from 'react-native'
import { Body, Drawer, Icon, Left, List, ListItem, Right, Separator, Switch, Text } from 'native-base'
import { MKButton, MKColor } from 'react-native-material-kit'

class SideMenu extends Component {
  close() {
    this.props.dispatch(actionCreators.closeDrawer())
  }

  render() {
    return (
      <ScrollView style={styles.drawerContainer}>
        <MKButton onPress={() => { this.close() }} style={styles.closeButton}>
          <Icon name='arrow-back' />
        </MKButton>
        <List>
          <MKButton>
            <ListItem icon>
              <Left>
                <Icon name="md-settings" />
              </Left>
              <Body>
                <Text>Settings</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
          </MKButton>
          <ListItem>
            <Text>Experiments</Text>
          </ListItem>
          <Separator bordered>
            <Text>SECTION</Text>
          </Separator>
          <ListItem>
            <Text>Reminders</Text>
          </ListItem>
        </List>
      </ScrollView>
    )
  }
}
const styles = {
  drawerContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  closeButton: {
    padding: 8,
    paddingRight: 16,
    alignSelf: 'flex-end'
  }
}

class SideDrawer extends Component {
  render() {
    return(
      <Drawer
        ref={(ref) => { this._drawer = ref }}
        content={<ConnectedSideMenu />}
        open={this.props.drawer.open}>
        {this.props.children}
      </Drawer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drawer: state.drawer
  }
}
const ConnectedSideMenu = connect(mapStateToProps)(SideMenu)
const ConnectedSideDrawer = connect(mapStateToProps)(SideDrawer)
export default ConnectedSideDrawer
