import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Content, List, Button, H2, Text } from 'native-base'
import Header from '../components/Header'

import ExperimentOverview from '../components/ExperimentOverview'
import ExperimentCreateButton from '../components/ExperimentCreateButton'

const minimumVisiblePresets = 6
const experimentsPresets = [
  {
    title: 'Blank',
    description: 'Create a completely custom experiment',
    icon: 'ios-document-outline'
  }, {
    title: 'A/B Test',
    description: 'Test multiple variants to find out what works best',
    icon: 'ios-photos-outline'
  }, {
    title: 'Correlation',
    description: 'Find out how different events correlate over time',
    icon: 'ios-color-filter-outline'
  }, {
    title: 'Diet',
    description: 'Test different diets to meet your goals',
    icon: 'ios-nutrition'
  }, {
    title: 'Sleep',
    description: 'See how your sleep affects different aspects of your life',
    icon: 'ios-alarm-outline'
  }, {
    title: 'Symptoms',
    description: 'Keep track of health symptoms and possible causes',
    icon: 'ios-pulse'
  }, {
    title: 'Breakfast',
    description: 'Which breakfast keeps you full the longest?',
    icon: 'ios-restaurant'
  }, {
    title: 'Allergy',
    description: 'Pinpoint the specific triggers of your allergy',
    icon: 'ios-paw'
  }, {
    title: 'Coffee',
    description: 'Test your caffeine dependence',
    icon: 'ios-cafe'
  }, {
    title: 'Workout',
    description: 'What is your best pre-workout supplement?',
    icon: 'ios-bicycle'
  }
]

class Experiments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllPresets: false
    }
  }

  render() {
    return (
      <Container>
        <Header title="Experiments" showMenu={true} />
        <Content>
          <List>
          {
            this.props.experiments.data.map((e) => {
              return <ExperimentOverview key={e.id} data={e} />
            })
          }
          </List>

          <Text style={{
            fontSize: 16,
            textAlign: 'center',
            marginTop: 80,
            marginBottom: 20
          }}>
            Start a new experiment
          </Text>
          <List>
            {
              experimentsPresets.map((e, i) => {
                if (this.state.showAllPresets === false && i >= minimumVisiblePresets) {
                  return
                }
                return <ExperimentCreateButton key={i} data={e} />
              })
            }
          </List>
          <Button light full
            onPress={() => {
              this.setState({ showAllPresets: !this.state.showAllPresets })
            }}
          >
            <Text>
              { this.state.showAllPresets ? 'Show less' : 'Show more' }
            </Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    experiments: state.experiments
  }
}
const ConnectedExperiments = connect(mapStateToProps)(Experiments)
export default ConnectedExperiments
