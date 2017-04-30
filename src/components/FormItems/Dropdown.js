import React, { Component } from 'react'
import { Item, Picker } from 'native-base'

export default class Dropdown extends Component {
  //TODO fix default value to the first item

  onChange(i) {
    this.props.onChange(i)
  }

  render() {
    return (
      <Picker
        iosHeader="Select one"
        mode="dropdown"
        selectedValue={this.props.answer}
        onValueChange={(value) => { this.onChange(value) }}>
        {
          this.props.options.map((o, i) => {
            return <Item label={o} value={o} key={i} />
          })
        }
      </Picker>
    )
  }
}
