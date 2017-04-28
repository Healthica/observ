import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import * as actionCreators from '../store/action-creators'
import { Container, Button, Content, Icon, Text } from 'native-base'
import { MKButton, MKColor } from 'react-native-material-kit'

import Header from '../components/Header'

class AddMeasurement extends Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({}, {
      
    }, this.props.experiment)
  }

  save() {
    alert(JSON.stringify(this.state))
  }

  render() {
    return (
      <Container>
        <Header title='Add Measurement' actions={[{ text: 'Save', cb: () => { this.save() }}]} />
        <Content style={{ padding: 16 }}>
          <Text>
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
