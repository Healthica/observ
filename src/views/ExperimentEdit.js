import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Container } from 'native-base'
import Header from '../components/Header'

export default class ExperimentEdit extends Component {
  render() {
    return (
      <Container>
        <Header title="Experiment Edit" />
      </Container>
    )
  }
}
