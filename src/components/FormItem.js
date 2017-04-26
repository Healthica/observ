import React, { Component } from 'react'
import { Text } from 'native-base'

export default class FormItem extends Component {
  render() {
    return (
      <Text>{this.props.question} - {this.props.type}</Text>
    )
  }
}
