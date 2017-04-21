import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Scene, ActionConst } from 'react-native-router-flux'
import { Navigator } from 'react-native'

import Splash from './views/Splash'
import Welcome from './views/Welcome'
import Experiments from './views/Experiments'
import ExperimentCreate from './views/ExperimentCreate'
import ExperimentView from './views/ExperimentView'
import ExperimentEdit from './views/ExperimentEdit'

export default class Application extends Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <Router>
          <Scene key="root" hideNavBar={true}>
            <Scene key="splash" component={Splash} initial={true} />
            <Scene key="welcome" component={Welcome} />
            <Scene key="experiments" component={Experiments} />
            <Scene key="experimentCreate" component={ExperimentCreate} />
            <Scene key="experimentView" component={ExperimentView} />
            <Scene key="experimentEdit" component={ExperimentEdit} />
          </Scene>
        </Router>
      </Provider>
    )
  }
}
