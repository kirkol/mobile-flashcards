import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import { Button, View, Text } from 'native-base';
import { addNewDeck } from '../actions/decks';

class DeckNew extends Component {

  state = {
    input: ""
  }

  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }))
  }

  handleSubmit = () => {
    const input = this.state.input
    const id = Math.random().toString(36).substring(2, 15)
    if(input !== ""){
      this.props.dispatch(addNewDeck(input, id))
      this.props.navigation.navigate(
        'Deck', {
        id: id
      })
    }else{
      alert("Deck name can't be empty")
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.center}>NEW DECK</Text>
        <Text style={styles.txt}>Choose title for your new deck</Text>
        <TextInput
          value={this.state.input}
          style={styles.input}
          onChangeText={(text) => this.handleTextChange(text.toUpperCase())} />
        <Button
          style={styles.btn}
          block
          warning
          onPress={this.handleSubmit}>
          <Text style={styles.btnText}>SUBMIT</Text>
        </Button>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#007399',
    flex: 1,
    alignItems: 'center',
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

export default connect(mapStateToProps)(DeckNew);