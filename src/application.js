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
          <Scene key="root">
            <Scene key="splash" component={Splash} hideNavBar={true} initial={true} />
            <Scene key="welcome" component={Welcome} hideNavBar={true} />
            <Scene key="experiments" component={Experiments} hideNavBar={false} title="Experiments" />
            <Scene key="experimentCreate" component={ExperimentCreate} hideNavBar={false} title="New Experiment" />
            <Scene key="experimentView" component={ExperimentView} hideNavBar={false} title="Experiment" />
            <Scene key="experimentEdit" component={ExperimentEdit} hideNavBar={false} title="Experiment Edit" />
          </Scene>
        </Router>
      </Provider>
    )
  }
}
