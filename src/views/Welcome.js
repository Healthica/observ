import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/action-creators'
import { Actions, ActionConst } from 'react-native-router-flux'
import {
  Button,
  Text,
  Image,
  StyleSheet,
  View
} from 'react-native'

import appStyles from '../styles/App'
const styles = StyleSheet.create(Object.assign({}, appStyles, {
  indicatorsContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicatorItem: {
    fontSize: 14,
    opacity: 0.6,
    padding: 2
  },
  indicatorItemFull: {
    fontSize: 22,
    padding: 2,
    paddingBottom: 4
  },
}))

class WelcomePageContent extends Component {
  render() {
    const viewStyle = StyleSheet.create({
      view: {
        flex: 1,
        backgroundColor: this.props.color,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 80
      },
      description: {
        fontSize: 20,
        lineHeight: 36,
        color: this.props.colorText,
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
      },
      image: {
        width: 250,
        height: 250,
        borderRadius: 250
      },
      buttonsContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 60,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12
      }
    })
    return (
      <View style={viewStyle.view}>
        <Image
          style={viewStyle.image}
          source={
            this.props.image === 'hero' ?
            require('../img/welcome-hero.png')
            :
            require('../img/welcome-doc.png')
          }
        />
        <Text style={viewStyle.description}>{ this.props.text }</Text>
        <View style={viewStyle.buttonsContainer}>
          <View>
            {
              !this.props.is_first &&
              <Button
                title="Back"
                onPress={this.props.prevPage}
                color="#81b6e3"
              />
            }
          </View>
          <View>
            {
              !this.props.is_last &&
              <Button
                title="Next"
                onPress={this.props.nextPage}
                color="#F3A530"
              />
            }
            {
              this.props.is_last &&
              <Button
                title="Okay, let's start"
                onPress={this.props.welcomeDone}
                color="#F3A530"
              />
            }
          </View>
        </View>
      </View>
    )
  }
}

class PageIndicators extends Component {
  render() {
    const indicators = []
    for (let i = 1; i <= this.props.pages; i++) {
      indicators.push(<Text key={i} style={i === this.props.currentPage ? styles.indicatorItemFull : styles.indicatorItem}>●</Text>)
    }
    return (
      <View style={styles.indicatorsContainer}>
        { indicators }
      </View>
    )
  }
}

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1
    }
  }

  nextPage() {
    this.setState({
      page: this.state.page + 1
    })
  }

  prevPage() {
    this.setState({
      page: this.state.page - 1
    })
  }

  welcomeDone() {
    this.props.dispatch(actionCreators.setUserFirstTime(false))
    Actions.experiments({ type: ActionConst.RESET })
  }

  render() {
    const { experiments, user, reduxState } = this.props
    let pageProps = {
      nextPage: this.nextPage.bind(this),
      prevPage: this.prevPage.bind(this),
      welcomeDone: this.welcomeDone.bind(this)
    }
    switch (this.state.page) {
      case 1:
        pageProps.text = "Welcome to Observ!\nWe help you run small experiments on yourself. Discover what works for you!"
        pageProps.color = '#367ABD'
        pageProps.colorText = '#fff'
        pageProps.image = 'hero'
        pageProps.is_first = true
        break
      case 2:
        pageProps.text = "AB test different diets, see how your sleep quality affects your mood, or pinpoint your allergy triggers. You can pick experiments from common presets, or craft your own."
        pageProps.color = '#4CB2D4'
        pageProps.colorText = '#fff'
        pageProps.image = 'doc'
        break
      case 3:
        pageProps.text = "Your job is to fill in a short form once a day, Observ will do the rest!"
        pageProps.color = '#56B949'
        pageProps.colorText = '#fff'
        pageProps.image = 'doc'
        pageProps.is_last = true
        break
    }
    return (
      <View style={styles.view}>
        <WelcomePageContent {...pageProps} />
        <PageIndicators pages={3} currentPage={this.state.page} />
      </View>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    experiments: state.experiments,
    user: state.user,
    reduxState: state
  }
}
const ConnectedWelcome = connect(mapStateToProps)(Welcome)
export default ConnectedWelcome
