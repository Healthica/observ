import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  View
} from 'react-native'

import appStyles from '../styles/App'
const styles = StyleSheet.create(Object.assign({}, appStyles, {
  experimentCreateButton: {
    width: 160,
    margin: 10,
    marginBottom: 40,
    flex: 1,
    alignItems: 'center'
  },
  experimentCreateButtonImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#AFE0FF',
    elevation: 5,
  },
  experimentCreateButtonImage: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  experimentCreateButtonTitle: {
    fontSize: 18,
    marginTop: 2,
    marginBottom: 2
  },
  experimentCreateButtonDescription: {
    fontSize: 14,
    textAlign: 'center'
  }
}))

export default class ExperimentCreateButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => { Actions.experimentCreate() }}
      >
        <View style={styles.experimentCreateButton}>
          <View style={styles.experimentCreateButtonImageContainer}>
            <Image
              style={styles.experimentCreateButtonImage}
              source={
                this.props.data.image === 'hero' ?
                require('../img/welcome-hero.png')
                :
                require('../img/welcome-doc.png')
              }
            />
          </View>
          <Text style={styles.experimentCreateButtonTitle}>
            { this.props.data.title }
          </Text>
          <Text style={styles.experimentCreateButtonDescription}>
            { this.props.data.description }
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}
