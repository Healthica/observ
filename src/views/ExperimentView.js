import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Container, Button, Text } from 'native-base'
import Header from '../components/Header'

export default class ExperimentEdit extends Component {
  render() {
    return (
      <Container>
        <Header title={ this.props.experimentId } />
        <Button onPress={Actions.experimentEdit} >
          <Text>
            Edit Experiment
          </Text>
        </Button>
      </Container>
    )
  }
}
