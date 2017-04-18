import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import createStore from './src/store/create-store'
import Application from './src/application'

const store = createStore()

export default class observ extends Component {
  render() {
    return (
      <Application store={store} />
    )
  }
}

AppRegistry.registerComponent('observ', () => observ)
