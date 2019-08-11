import React, { Component } from 'react';
import { AsyncStorage } from '@react-native-community/async-storage'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      textInputData: '',
      //to get the value from the TextInput
      getValue: '',
      //to set the value on Text
    };
  }
  render() {
    return (
      <View>
        <Text>Hello world</Text>
        <TextInput
          style={styles.TextInputStyle}

        ></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    borderWidth: 1,
    backgroundColor: 'orange',
  },
});


