import React, { Component } from 'react'
import { Text, View, Radio } from 'native-base'
import { MKTextField } from 'react-native-material-kit'

export default class Scale extends Component {
  onChange(i) {
    this.props.onChange(i)
  }

  render() {
    const options = []
    for (let i = this.props.options.min; i <= this.props.options.max; i++) {
      options.push(
        <View key={i}>
          <Text style={style.label}>{i}</Text>
          <Radio
            selected={this.props.answer === i}
            onPress={() => { this.onChange(i) }} />
        </View>
      )
    }
    return (
      <View style={style.row}>
        <Text style={style.minmaxLabel}>{ this.props.options.minLabel }</Text>
        {
          options.map(o => { return o })
        }
        <Text style={style.minmaxLabel}>{ this.props.options.maxLabel }</Text>
      </View>
    )
  }
}

const style = {
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 12,
    textAlign: 'center'
  },
  minmaxLabel: {
    marginTop: 18,
    fontSize: 14
  }
}
