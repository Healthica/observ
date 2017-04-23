import React, { Component } from 'react'
import { Text, Input, Button, View } from 'native-base'

import Counter from './FormItems/CounterEdit'
import Dropdown from './FormItems/DropdownEdit'

export default class FormItemEdit extends Component {
  onChange(data) {
    this.props.onChange(Object.assign({}, this.props, data))
  }

  render() {
    let Item
    switch (this.props.type) {
      case 'counter':
        Item = <Counter {...this.props} />
        break;
      case 'dropdown':
        Item = <Dropdown {...this.props} />
        break;
    }

    return (
      <View style={style.item}>
        <Input
          placeholder="Question"
          onChangeText={ text => this.onChange({ question: text }) }
          value={this.props.question}
          style={style.title}
        />
        { Item }
      </View>
    )
  }
}

const style = {
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16
  },
  title: {
    fontSize: 22
  }
}
