import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import {
  // Button,
  // Text,
  ScrollView,
  StyleSheet,
  View
} from 'react-native'
import { Container, Content, Button, Text, Form, Item, Input, Label, Picker } from 'native-base'
import Header from '../components/Header'

import appStyles from '../styles/App'
const styles = StyleSheet.create(Object.assign({}, appStyles, {
  
}))

export default class ExperimentCreate extends Component {
  render() {
    return (
      <Container>
        <Header title="New Experiment" />
        <Content padder>
          <View style={styles.titleSpace}></View>
          <Form>
            <Item floatingLabel>
                <Label>Title</Label>
                <Input />
            </Item>
            <Picker
              iosHeader="Type"
              mode="dropdown"
              selectedValue="key1"
              onValueChange={() => {}}>
              <Item label="Correlation" value="key0" />
              <Item label="A/B Test" value="key1" />
             </Picker>
          </Form>
          <Button onPress={Actions.experiments} >
            <Text>
              Next
            </Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
