import React, { Component } from 'react'
import { Modal } from 'react-native'
import { Text, View } from 'native-base'
import Header from './Header'

export default class ExperimentSettings extends Component {
  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.visible}
        onRequestClose={() => { this.props.hide() }}
        >
        <View>
          <Header title={'Experiment Settings'} noLeftActions={true}
            actions={[{
              icon: 'md-checkmark',
              cb: () => { this.props.hide() }}]} />
          <Text>
            Settings
          </Text>
        </View>
      </Modal>
    )
  }
}

const style = {

}
