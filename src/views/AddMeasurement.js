import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import * as actionCreators from '../store/action-creators'
import { Container, Button, Content, Icon, Text } from 'native-base'
import { MKButton, MKColor } from 'react-native-material-kit'
import DateTimePicker from 'react-native-modal-datetime-picker'

import Header from '../components/Header'
import FormItem from '../components/FormItem'

import uuid from 'uuid/v4'
import moment from 'moment'

class AddMeasurement extends Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({}, {
      id: uuid(),
      datetime: moment(),
      isDateTimePickerVisible: false,
      answers: []
    }, this.props.experiment)
  }

  updateFormItem(i, answer) {
    const newAnswers = this.state.answers.slice()
    newAnswers[i] = answer
    this.setState({ ...this.state, answers: newAnswers })
  }

  showDateTimePicker() {
    this.setState({ ...this.state, isDateTimePickerVisible: true })
  }
  hideDateTimePicker() {
    this.setState({ ...this.state, isDateTimePickerVisible: false })
  }

  handleDatePicked(date) {
    const datetime = moment(date)
    if (datetime.isValid()) {
      this.setState({ ...this.state, datetime })
    }
    this.hideDateTimePicker()
  }

  save() {
    this.props.dispatch(actionCreators.addMeasurement({
      experimentId: this.state.id,
      measurement: {
        id: this.state.id,
        datetime: this.state.datetime,
        answers: this.state.answers
      }
    }))
    Actions.pop()
  }

  render() {
    return (
      <Container>
        <Header title='Add Measurement' actions={[{ text: 'Save', cb: () => { this.save() }}]} />
        <MKButton
          onPress={() => {this.showDateTimePicker()}}
          rippleColor='rgba(233, 233, 233, 0.2)'
          style={style.datetimeButton}>
          <Text style={style.datetimeText}>
            { moment(this.state.datetime).format("DD/MM h:mm A") }
          </Text>
          <Icon name='ios-calendar-outline' style={style.datetimeText} />
        </MKButton>
        <Content style={{ padding: 16 }}>
          {
            this.state.form.map((item, i) => {
              return (
                <FormItem key={i}
                  {...item}
                  answer={this.state.answers[i]}
                  onChange={(answer) => { this.updateFormItem(i, answer) }} />
              )
            })
          }
        </Content>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={(date) => {this.handleDatePicked(date)}}
          mode='datetime'
          date={moment(this.state.datetime).toDate()}
          onCancel={() => {this.hideDateTimePicker()}}
        />
      </Container>
    )
  }
}

const style = {
  datetimeButton: {
    alignSelf: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    maxHeight: 60,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  datetimeText: {
    padding: 8,
    color: '#666'
  }
}

const mapStateToProps = (state) => {
  return {
    experiments: state.experiments
  }
}
const ConnectedAddMeasurement = connect(mapStateToProps)(AddMeasurement)
export default ConnectedAddMeasurement
