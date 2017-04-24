import React, { Component } from 'react'
import { Modal } from 'react-native'
import { Text, View } from 'native-base'
import { MKSlider, MKTextField } from 'react-native-material-kit'
import Header from './Header'
import _defaults from 'lodash/defaults'

export default class ExperimentSettings extends Component {
  constructor(props) {
    super(Object.assign(props, {
      settings: _defaults(props.settings, {
        significanceThreshold: 90
      })
    }))
    this.state = this.props.settings
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
          <Header title={'Experiment Settings'} noLeftActions={true}
            actions={[{
              icon: 'md-checkmark',
              cb: () => { this.props.hide() }}]} />

          <Text>
            Significance Threshold: {this.state.significanceThreshold}
          </Text>
          <MKSlider
            ref="sliderWithValue"
            min={0}
            max={100}
            step={1}
            minValue={60}
            value={this.state.significanceThreshold}
            style={{width: 300}}
            onChange={(val) => { this.setState({ ...this.state,
              significanceThreshold: Math.min(Math.max(Math.round(val), 60), 99)
            })}}
            onConfirm={() => { this.save() }}
            />
        </View>
      </Modal>
    )
  }
}

const style = {

}
