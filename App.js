import React, { Component } from 'react';
import  AsyncStorage  from '@react-native-community/async-storage'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
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

  //funcao para guardar o valor 
  saveValueFunction = () => {
    //ver se nao e null
    if (this.state.textInputData) {
      AsyncStorage.setItem('any_key_here', this.state.textInputData);
      //meter outra vez o textInputData sem nada
      this.setState({ textInputData: '' });
      //alerta de consegiuu guardar
      alert('Saved');
    } else {
      alert('Please fill data');

    }
  };


  render() {
    return (
      <View>
        <Text>Hello world</Text>
        <TextInput
          value={this.state.textInputData}
          style={styles.TextInputStyle}
          //troca o valor de textInputData
          onChangeText={data => this.setState({ textInputData: data })}
          placeholder="Enter Some Text here"
        ></TextInput>


        <TouchableOpacity
          onPress={this.saveValueFunction}
          style={styles.button}>
          <Text style={styles.buttonText}> SAVE VALUE </Text>
        </TouchableOpacity>
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
  button: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#848484',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});


