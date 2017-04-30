import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import * as actionCreators from '../store/action-creators'
import { Container, Button, Content, Icon, Text } from 'native-base'
import { MKButton, MKColor } from 'react-native-material-kit'

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
      answers: []
    }, this.props.experiment)
  }

  updateFormItem(i, answer) {
    const newAnswers = this.state.answers.slice()
    newAnswers[i] = answer
    this.setState({ ...this.state, answers: newAnswers })
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
        <Text>
          { moment(this.state.datetime).format("DD/MM h:mm A") }
        </Text>
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
          <Text style={{ color: '#ccc', marginTop: 40, marginBottom: 100, fontSize: 10 }}>
            {
              JSON.stringify(this.state, null, 2)
            }
          </Text>
        </Content>
      </Container>
    )
  }
}

const style = {
}

const mapStateToProps = (state) => {
  return {
    experiments: state.experiments
  }
}
const ConnectedAddMeasurement = connect(mapStateToProps)(AddMeasurement)
export default ConnectedAddMeasurement
