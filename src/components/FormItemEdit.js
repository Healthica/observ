import React, { Component } from 'react'
import { Input, Button, Icon, View } from 'native-base'

import Counter from './FormItems/CounterEdit'
import Dropdown from './FormItems/DropdownEdit'
import Scale from './FormItems/ScaleEdit'

export default class FormItemEdit extends Component {
  onChange(data) {
    this.props.onChange(Object.assign({}, this.props, data))
  }

  render() {
    let ItemEdit
    switch (this.props.type) {
      case 'counter':
        ItemEdit = <Counter {...this.props} />
        break;
      case 'dropdown':
        ItemEdit = <Dropdown {...this.props} />
        break;
      case 'scale':
        ItemEdit = <Scale {...this.props} />
        break;
    }

    return (
      <View style={style.item}>
        <View style={style.row}>
          <Input
            placeholder="Question"
            onChangeText={ text => this.onChange({ question: text }) }
            value={this.props.question}
            style={style.title}
          />
          <Button transparent>
            <Icon name="md-trash" onPress={() => {this.props.onDelete()}} style={style.moreIcon} />
          </Button>
        </View>
        { ItemEdit }
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
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16
  },
  title: {
    fontSize: 22
  },
  moreIcon: {
    color: '#999',
    fontSize: 20
  }
}
