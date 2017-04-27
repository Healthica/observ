import React, { Component } from 'react'
import { Modal } from 'react-native'
import { Text, View } from 'native-base'
import Header from './Header'
import _defaults from 'lodash/defaults'

export default class AddMeasurementModal extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.form
  }

  save() {
    this.props.save(this.state)
  }

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.visible}
        onRequestClose={() => { this.props.hide() }}
        >
        <View>
          <Header title={'Add Measurement'} noLeftActions={true}
            actions={[{
              icon: 'md-checkmark',
              cb: () => { this.props.save(this.state) }}]} />

          <Text>
            Yo
          </Text>
        </View>
      </Modal>
    )
  }
}

const style = {

}
