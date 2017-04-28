import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Scene, ActionConst } from 'react-native-router-flux'
import { Navigator } from 'react-native'

import Splash from './views/Splash'
import Welcome from './views/Welcome'
import Experiments from './views/Experiments'
import ExperimentEdit from './views/ExperimentEdit'
import ExperimentView from './views/ExperimentView'
import AddMeasurement from './views/AddMeasurement'

export default class Application extends Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <Router>
          <Scene key="root" hideNavBar={true}>
            <Scene key="splash" component={Splash} initial={true} />
            <Scene key="welcome" component={Welcome} />
            <Scene key="experiments" component={Experiments} />
            <Scene key="experimentEdit" component={ExperimentEdit} />
            <Scene key="experimentView" component={ExperimentView} />
            <Scene key="addMeasurement" component={AddMeasurement} />
          </Scene>
        </Router>
      </Provider>
    )
  }
}
