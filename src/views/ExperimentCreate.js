import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Container, Content, Button, Text, Form, Item, Input, Label, Picker } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import Header from '../components/Header'

export default class ExperimentCreate extends Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({}, this.props.experiment)
  }

  render() {
    return (
      <Container>
        <Header title="New Experiment" />
        <Content padder>
          <Grid>
            <Col size={60}>
              <Item floatingLabel>
                <Label>Experiment Name</Label>
                <Input
                  onChangeText={(text) => this.setState({ title: text })}
                  value={this.state.title}
                />
              </Item>
            </Col>
            <Col size={40}>
              <Picker
                iosHeader="Experiment Type"
                mode="dropdown"
                selectedValue={this.state.type}
                textStyle={{textAlign:'right'}}
                onValueChange={(key) => this.setState({ type: key })}>
                <Item label="Correlation" value="correlation" />
                <Item label="A/B Test" value="ab_test" />
               </Picker>
            </Col>
          </Grid>
          <Button onPress={Actions.experiments} >
            <Text>
              Create
            </Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
