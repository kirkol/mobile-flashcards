import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, TextInput } from 'react-native'
import { Button, View, Text } from 'native-base';

class Results extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.center}>DECK TITLE</Text>
        <Text style={styles.center}>YOUR SCORE</Text>
        <Text style={styles.center}>80%</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#007399',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  center: {
    color: '#ffffff',
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 40,
  },
  txt: {
    marginTop: 40,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    width: 300,
    height: 44,
    padding: 8,
    backgroundColor: '#ffffff',
    margin: 50
  },
  btn: {
    padding: 10,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10
  },
  btnText: {
    fontSize: 20
  }
})

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Results);