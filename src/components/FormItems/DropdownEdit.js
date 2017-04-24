import React, { Component } from 'react'
import { Text, View, Button, Icon } from 'native-base'
import { MKTextField } from 'react-native-material-kit'

export default class DropdownEdit extends Component {
  onChange(index, text) {
    const newState = this.props.options.slice()
    newState[index] = text
    this.props.onChange(Object.assign({}, this.props, {
      options: newState
    }))
  }

  onBlur(index) {
    const text = this.props.options[index]
    if (!text || text.length === 0) {
      this.onChange(index, `Option ${index + 1}`)
    }
  }

  onAddOption() {
    const newState = this.props.options.slice()
    newState.push(`Option ${newState.length + 1}`)
    this.props.onChange(Object.assign({}, this.props, {
      options: newState
    }))
  }

  onDeleteOption(index) {
    const newState = this.props.options.slice()
    newState.splice(index, 1)
    this.props.onChange(Object.assign({}, this.props, {
      options: newState
    }))
  }

  render() {
    return (
      <View>
        {
          this.props.options.map((o, i) => {
            return (
              <View key={i} style={style.row}>
                <MKTextField
                  onChangeText={ text => this.onChange(i, text) }
                  onBlur={() => {this.onBlur(i)}}
                  selectTextOnFocus={true}
                  style={{ width: 140 }}
                  value={o}
                />
                <Button transparent onPress={() => {this.onDeleteOption(i)}}>
                  <Icon name="md-close" style={style.deleteButton} />
                </Button>
              </View>
            )
          })
        }
        <Button transparent onPress={() => {this.onAddOption()}}>
          <Icon name="md-add" style={style.addButton} />
          <Text style={style.addButton}>Add Option</Text>
        </Button>
      </View>
    )
  }
}

const style = {
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  addButton: {
    color: '#999',
    fontSize: 14
  },
  deleteButton: {
    color: '#999',
    fontSize: 18
  }
}
