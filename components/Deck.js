import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { Button, View, Text } from 'native-base';
import { nextCard } from '../actions/cardNr'
import { updateScore } from '../actions/score'

class Deck extends Component {

  // componentDidUpdate(){
  //   this.props.dispatch(nextCard(0))
  //   this.props.dispatch(updateScore(0))
  // }

  handlePressQuiz = (id) => {
    this.props.navigation.navigate(
      'Card',
      { id: id }
    ), this.props.dispatch(nextCard(0)),
      this.props.dispatch(updateScore(0))
  }

  handlePressNewCard = (id) => {
    this.props.navigation.navigate(
      'CardNew',
      { id: id }
    )
  }

  render() {
    const { deck, id } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.center}>{deck.title}</Text>
        <Text style={styles.subtitle}>{deck.questions.length}</Text>
        <Button
          style={styles.btn}
          onPress={() => this.handlePressNewCard(id)}
          block
          warning>
          <Text style={styles.btnText}>ADD NEW CARD</Text>
        </Button>
        <Button
          style={styles.btn}
          onPress={() => this.handlePressQuiz(id)}
          block
          warning>
          <Text style={styles.btnText}>START QUIZ</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007399',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    color: '#ffffff',
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 40,
    width: 200,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 20,
    marginBottom: 60
  },
  btn: {
    padding: 10,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10
  },
  btnText: {
    fontSize: 20,
    color: '#333333'
  }
})

function mapStateToProps({ decks }, { navigation }) {
  const id = navigation.state.params.id // BARDZO WAZNE!!! POBRANIE PARAMSOW Z POPRZEDNIEGO KOMPONENTU
  return {
    deck: decks[id],
    id
  }
}

export default connect(mapStateToProps)(Deck);
