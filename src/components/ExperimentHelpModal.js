import React, { Component } from 'react'
import { Modal } from 'react-native'
import { Button, Text, View } from 'native-base'
import Header from './Header'

export default class ExperimentHelpModal extends Component {
  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => {this.props.hide()}}
        >
        <View style={style.helpModalBackground}>
          <View style={style.helpModal}>
            <Text>
              An Experiment is a short form that you will fill in every day until the experiment is over.
            </Text>
            <Text>
              Customize the questions in the form and check the settings for different configurations.
            </Text>
            <Button style={style.helpModalButton} onPress={() => {this.props.hide()}}>
              <Text>Got it</Text>
            </Button>
          </View>
        </View>
      </Modal>
    )
  }
}

const style = {
  helpModalBackground: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  helpModal: {
    width: 300,
    maxHeight: 260,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
  helpModalButton: {
    alignSelf: 'flex-end'
  }
}
