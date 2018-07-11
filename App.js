import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ButtonRack } from './src/components/ButtonRack/ButtonRack.js';
import { ResultsView } from './src/components/ResultsView/ResultsView.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addToBuffer = this.addToBuffer.bind(this);
    this.clearBuffer = this.clearBuffer.bind(this);
    this.evalBuffer = this.evalBuffer.bind(this);
    this.state = { buffer: '' }
  }
  clearBuffer(){
    this.setState({
      buffer: ''
    })
  }
  evalBuffer(){
    this.setState({
      buffer: eval(this.state.buffer)
    })
  }
  addToBuffer(symbolToAdd) {
    return () => this.setState({
        buffer: this.state.buffer + symbolToAdd
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ResultsView
          value={this.state.buffer}
          resultsContainerStyle={[styles.resultsContainerStyle]}
          bufferStyle={styles.bufferStyle}
        />
        <ButtonRack
          addToBuffer={this.addToBuffer}
          clearBuffer={this.clearBuffer}
          evalBuffer={this.evalBuffer}
          buttonContainerStyle={styles.buttonContainerStyle}
          equalButtonContainerStyle={styles.equalButtonContainerStyle}
          numberButton={styles.numberButton}
          equalButton={styles.equalButton}
          operatorButton={styles.operatorButton}
          clearButton={styles.clearButton}
          rackStyle={styles.buttonRack} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  bufferStyle: {

  },
  resultsContainerStyle: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  buttonRack: {
    flex: 3,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#055',
  },
  buttonContainerStyle: {
    width: 90,
    height: 77,
    justifyContent: 'center',
    borderColor: 'grey',
    borderWidth: 0.5,
    backgroundColor: 'white'
  },
  equalButtonContainerStyle: {
    width: 90,
    height: 77,
    justifyContent: 'center',
    borderColor: 'grey',
    borderWidth: 0.5,
    backgroundColor: 'blue'
  },
  operatorButton: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'sans-serif-light',
    color: 'blue'
  },
  clearButton: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'sans-serif-light',
    color: 'orange'
  },
  equalButton: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'sans-serif-light',
    color: 'white'
  },
  numberButton: {
    fontSize: 30,
    color: 'grey',
    textAlign: 'center',
    fontFamily: 'sans-serif-light'
  }
});
