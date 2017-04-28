import React, { Component } from 'react'
import { Button, Icon, View, Text } from 'native-base'

import Scale from './FormItems/Scale'

export default class FormItem extends Component {
  onChange(data) {
    this.props.onChange(Object.assign({}, this.props, data))
  }

  render() {
    let Item
    switch (this.props.type) {
      case 'scale':
        Item = <Scale {...this.props} />
        break;
    }

    return (
      <View style={style.item}>
        <Text style={style.question}>{this.props.question}</Text>
        { Item }
      </View>
    )
  }
}

const style = {
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 32
  },
  question: {
    marginBottom: 8
  }
}
