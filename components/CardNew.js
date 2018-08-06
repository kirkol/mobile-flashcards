import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import { Button, View, Text } from 'native-base';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { addNewCard } from '../actions/decks';

class DeckNew extends Component {

  state = {
    question: "",
    answer: true
  }

  handleQuestionText = (text) => {
    this.setState(() => ({
      question: text
    }))
  }

  handleAnswerRadio = (value) => {
    this.setState(() => ({
      answer: value
    }))
  }

  handlePress = () => {
    const { question, answer } = this.state
    const {id} = this.props
    if (question !== "") {
      this.props.dispatch(addNewCard(id, question, answer))
      this.props.navigation.navigate('Deck')
    } else {
      alert('You need to fulfill question and its answer')
    }
  }

  render() {
    const { answer, question } = this.props
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.center}>NEW CARD</Text>
        <Text style={styles.txt}>Fill question and answer</Text>
        <TextInput
          style={styles.input}
          onChangeText={(textQuestion) => this.handleQuestionText(textQuestion)}
          value={question} />
        <RadioForm
          style={styles.radio}
          formHorizontal={true}
          animation={true}>
          <RadioButton>
            <RadioButtonInput
              obj={{ label: 'true', value: true }}
              index={0}
              isSelected={this.state.answer}
              onPress={(value) => this.handleAnswerRadio(value)}
              buttonInnerColor='white'
              buttonOuterColor='white'
              buttonSize={20}
              buttonStyle={{margin: 10}}
            />
            <RadioButtonLabel
              obj={{ label: 'true', value: true }}
              index={0}
              onPress={(value) => this.handleAnswerRadio(value)}
              labelStyle={{ fontSize: 20, color: 'white' }}
            />
            <RadioButtonInput
              obj={{ label: 'false', value: false }}
              index={1}
              isSelected={!this.state.answer}
              onPress={(value) => this.handleAnswerRadio(value)}
              buttonInnerColor='white'
              buttonOuterColor='white'
              buttonSize={20}
              buttonStyle={{margin: 10}}
            />
            <RadioButtonLabel
              obj={{ label: 'false', value: false }}
              index={1}
              onPress={(value) => this.handleAnswerRadio(value)}
              labelStyle={{ fontSize: 20, color: 'white' }}
            />
          </RadioButton>
        </RadioForm>
        <Button
          style={styles.btn}
          onPress={this.handlePress}
          block
          warning>
          <Text style={styles.btnText}>SUBMIT</Text>
        </Button>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
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
    marginTop: 50
  },
  btn: {
    padding: 10,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10
  },
  btnText: {
    fontSize: 20
  },
  radio: {
    marginTop: 20,
    marginBottom: 10,
  }
})

function mapStateToProps({ decks }, { navigation }) {
  const id = navigation.state.params.id // BARDZO WAZNE!!! POBRANIE PARAMSOW Z POPRZEDNIEGO KOMPONENTU
  return {
    deck: decks[id],
    id
  }
}

export default connect(mapStateToProps)(DeckNew);