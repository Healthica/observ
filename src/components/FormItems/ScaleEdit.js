import React, { Component } from 'react'
import { Picker, Item, Text, View, Button, Icon } from 'native-base'
import { MKTextField } from 'react-native-material-kit'

export default class ScaleEdit extends Component {
  onChange(options) {
    this.props.onChange(Object.assign({}, this.props, {
      options: Object.assign({}, this.props.options, {...options})
    }))
  }

  render() {
    return (
      <View>
        <View style={style.row}>
          <Picker
            mode="dropdown"
            style={style.dropdown}
            selectedValue={this.props.options.min}
            onValueChange={value => {this.onChange({ min: value })}}>
            <Item label="0" value={0} />
            <Item label="1" value={1} />
          </Picker>
          <Text style={{ textAlign: 'center', width: 60 }}>to</Text>
          <Picker
            mode="dropdown"
            style={style.dropdown}
            selectedValue={this.props.options.max}
            onValueChange={value => {this.onChange({ max: value })}}>
            <Item label="2" value={2} />
            <Item label="3" value={3} />
            <Item label="4" value={4} />
            <Item label="5" value={5} />
            <Item label="6" value={6} />
            <Item label="7" value={7} />
            <Item label="8" value={8} />
            <Item label="9" value={9} />
            <Item label="10" value={10} />
          </Picker>
        </View>
        <View style={style.row}>
          <Text style={style.labelText}>{this.props.options.min}</Text>
          <MKTextField
            placeholder="Label (optional)"
            onChangeText={ text => this.onChange({ minLabel: text }) }
            selectTextOnFocus={true}
            style={style.labelInput}
            value={this.props.options.minLabel}
          />
        </View>
        <View style={style.row}>
          <Text style={style.labelText}>{this.props.options.max}</Text>
          <MKTextField
            placeholder="Label (optional)"
            onChangeText={ text => this.onChange({ maxLabel: text }) }
            selectTextOnFocus={true}
            style={style.labelInput}
            value={this.props.options.maxLabel}
          />
        </View>
      </View>
    )
  }
}

const style = {
  row: {
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems: 'center',
    marginBottom: 10
  },
  dropdown: {
    width: 60
  },
  labelText: {
    color: '#999',
    width: 30
  },
  labelInput: {
    width: 140
  }
}
