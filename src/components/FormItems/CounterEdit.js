import React, { Component } from 'react'
import { Text, View } from 'native-base'

export default class CounterEdit extends Component {
  onChange(data) {
    this.props.onChange(Object.assign({}, this.props, data))
  }

  render() {
    return (
      <View>
        <Text>Counter field</Text>
      </View>
    )
  }
}
