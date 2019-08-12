import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
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
      inputValue: [],
      getValue: [],
      //to set the value on Text
    };
    this.getValueFunction;
    //this.setState({inputValue : getValue});
  }

  //funcao para guardar o valor 
  saveValueFunction = () => {


    //ver se nao e null
    if (this.state.textInputData) {
      //mete dentro do array novas info
      let tmp = this.state.getValue;
      this.setState({inputValue : tmp});
      let textInputData = this.state.textInputData;
      let inputValue = this.state.inputValue;
      inputValue.push(textInputData);
      this.setState(inputValue);

      //passar para json
      let json = JSON.stringify(this.state.inputValue);

      AsyncStorage.setItem('key2', json);
      //meter outra vez o textInputData sem nada
      this.setState({ textInputData: '' });
      //alerta de consegiuu guardar
      alert('Saved');
    } else {
      alert('Please fill data');

    }
  };

  //funçao para obter o valor guardado
  getValueFunction = () => {

    AsyncStorage.getItem('key2').then
      (
        value => this.setState({ getValue: JSON.parse(value) })
      );
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>titulo depois</Text>
        <TextInput
          value={this.state.textInputData}
          style={styles.TextInputStyle}
          //troca o valor de textInputData
          onChangeText={data => this.setState({ textInputData: data })}
          placeholder="Enter Some Text here"
        ></TextInput>

        <Text style={styles.text}> {this.state.textInputData} </Text>
        

        <TouchableOpacity
          onPress={this.saveValueFunction}
          style={styles.button}>
          <Text style={styles.buttonText}> SAVE VALUE </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.getValueFunction}
          style={styles.button}>
          <Text style={styles.buttonText}> GET VALUE </Text>
        </TouchableOpacity>

        <Text>{this.state.getValue}</Text>

        {this.state.getValue.map((text, index) => (<Text
          key={text}
          style={styles.text}
        >{text}</Text>))}

        <Text></Text>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',

  },
  TextInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    borderWidth: 1,
    backgroundColor: '#FF8000',
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
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FF8000',
    borderColor: '#FF8000',
    borderWidth: 1,
    marginTop: 10,
  },
});


