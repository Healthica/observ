import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/action-creators'
import { Actions, ActionConst } from 'react-native-router-flux'
import {
  Text,
  StyleSheet,
  View
} from 'react-native'

import appStyles from '../styles/App'
const styles = StyleSheet.create(Object.assign({}, appStyles, {
  splash: {
    backgroundColor: '#AFE0FF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#295ea4',
    textAlign: 'center',
    padding: 22
  },
  splashTagline: {
    fontSize: 22,
    color: '#295ea4',
    textAlign: 'center'
  }
}))

const SPLASH_TIME = 800

class Welcome extends Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.loadLocalStateUser())
    this.props.dispatch(actionCreators.loadLocalStateExperiments())

    // Force welcome screen
    setTimeout(() => {
      this.props.dispatch(actionCreators.setUserFirstTime(true))
    }, 300)

    setTimeout(() => {
      if (this.props.user.is_first_time === false) {
        Actions.experiments({ type: ActionConst.RESET })
      } else {
        Actions.welcome({ type: ActionConst.RESET })
      }
    }, SPLASH_TIME)
  }

  render() {
    return (
      <View style={styles.splash}>
        <View>
          <Text style={styles.splashTitle}>
            Observ
          </Text>
          <Text style={styles.splashTagline}>
            Self Experimentation
          </Text>
          <Text style={styles.splashTagline}>
          </Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    user: state.user,
    reduxState: state
  }
}
const ConnectedWelcome = connect(mapStateToProps)(Welcome)
export default ConnectedWelcome
