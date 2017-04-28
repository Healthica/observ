import React, { Component } from 'react'
import { Icon, View } from 'native-base'
import { MKColor, MKButton, MKTextField } from 'react-native-material-kit'

export default class Counter extends Component {
  onChange(num) {
    this.props.onChange(parseInt(num, 10))
  }

  increase() {
    this.props.onChange(parseInt(this.props.answer || 0, 10) + 1)
  }
  decrease() {
    this.props.onChange(parseInt(this.props.answer || 0, 10) - 1)
  }

  render() {
    return (
      <View style={style.row}>
        <MKTextField
          placeholder='Number'
          keyboardType='numeric'
          selectTextOnFocus={true}
          value={'' + (this.props.answer || 0)}
          style={style.inputField}
          onChangeText={(value) => {
            this.onChange(value)
          }} />
        <MKButton
          style={style.button}
          backgroundColor={MKColor.Blue}
          onPress={() => { this.decrease() }}>
          <Icon name='md-remove' style={style.buttonIcon} />
        </MKButton>
        <MKButton
          style={style.button}
          backgroundColor={MKColor.Blue}
          onPress={() => { this.increase() }}>
          <Icon name='md-add' style={style.buttonIcon} />
        </MKButton>
      </View>
    )
  }
}

const style = {
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  inputField: {
    flexGrow: 2
  },
  button: {
    marginLeft: 8,
    borderRadius: 2,
    maxWidth: 60,
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonIcon: {
    color: '#fff',
    fontSize: 15
  }
}
