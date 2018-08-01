import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { Button, Text, View } from 'native-base';
import { toggleCard } from '../actions/cardSide';

class CardFront extends Component {

  handleAnswer = (answer) => {
    this.props.dispatch(toggleCard("answer"))
    setTimeout(() => {
      this.props.dispatch(toggleCard("question"))
    }, 2000)
  }

  render() {
    console.log("CARD FONT", this.props)
    const { deck, cardSide } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.box, { flex: 1 }]}>{deck.questions.length}</Text>
          <Text style={[styles.box, { alignSelf: 'flex-end' }]}>{deck.questions.length * 100}%</Text>
        </View>
        {cardSide === 'question'
          ?
          (<View style={styles.cardContainer}>
            <Text style={styles.cardText}>{deck.questions[0].question}</Text>
            <Button
              onPress={() => this.handleAnswer(true)}
              style={styles.btn}
              block
              success>
              <Text style={styles.btnText}>TRUE</Text>
            </Button>
            <Button
              onPress={() => this.handleAnswer(false)}
              style={styles.btn}
              block
              danger>
              <Text style={styles.btnText}>FALSE</Text>
            </Button>
          </View>)
          :
          (<Text style={styles.answerText}> {deck.questions[0].answer.toString().toUpperCase()} </Text>)}
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007399',
    flex: 1
  },
  header: {
    flexDirection: 'row',
  },
  box: {
    width: 50,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  cardContainer: {
    backgroundColor: '#007399',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  cardText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  btn: {
    padding: 10,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 15
  },
  btnText: {
    fontSize: 20
  },
  answerText: {
    marginTop: 80,
    fontSize: 70,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

function mapStateToProps({ decks, cardSide }, { navigation }) {
  const id = navigation.state.params.id
  return {
    cardSide,
    deck: decks[id],
    id
  }
}

export default connect(mapStateToProps)(CardFront);
