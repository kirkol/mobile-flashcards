import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { Button, Text, View } from 'native-base';
import { toggleCard } from '../actions/cardSide';
import { nextCard } from '../actions/cardNr';
import Results from './Results'
import { updateScore } from '../actions/score';

class CardFront extends Component {

  handleShowAnswer = () => {
    this.props.dispatch(toggleCard("answer"))
  }

  handleShowQuestion = () => {
    this.props.dispatch(toggleCard("question"))
  }

  handleCorrect = () => {
    const { dispatch, cardNr, score } = this.props
    dispatch(updateScore(score + 1)) //dodanie punktu
    dispatch(nextCard(cardNr + 1)) //przerzucenie karty
    dispatch(toggleCard("question")) //obrocenie na question
  }

  handleIncorrect = () => {
    const { dispatch, cardNr } = this.props
    dispatch(nextCard(cardNr + 1)) //przerzucenie karty
    dispatch(toggleCard("question")) //obrocenie na question
  }

  render() {
    const { deck, cardSide, cardNr, navigation } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.box, { flex: 1 }]}>{cardNr}/{deck.questions.length}</Text>
          <Text style={[styles.box, { alignSelf: 'flex-end' }]}>{(100 * cardNr / (deck.questions.length)).toFixed(0)}%</Text>
        </View>
        {deck.questions[cardNr]
          ?
          (cardSide === 'question'
            ?
            (<View style={styles.cardContainer}>
              <Text style={styles.cardText}>{deck.questions[cardNr].question}</Text>
              <Button
                onPress={() => this.handleCorrect()}
                style={styles.btn}
                block
                success>
                <Text style={styles.btnText}>CORRECT</Text>
              </Button>
              <Button
                onPress={() => this.handleIncorrect()}
                style={styles.btn}
                block
                danger>
                <Text style={styles.btnText}>INCORRECT</Text>
              </Button>
              <Button
                onPress={() => this.handleShowAnswer()}
                style={[styles.btn, { marginTop: 30 }]}
                block
                warning>
                <Text style={styles.btnText}>SHOW ANSWER</Text>
              </Button>
            </View>)
            :
            (<View style={styles.cardContainer}> 
              <Text style={styles.answerText}>
                {(cardNr - 1 === -1)
                  ?
                  deck.questions[0].answer.toUpperCase()
                  :
                  (deck.questions[cardNr].answer.toUpperCase())}
              </Text>
              <Button
                onPress={() => this.handleCorrect()}
                style={styles.btn}
                block
                success>
                <Text style={styles.btnText}>CORRECT</Text>
              </Button>
              <Button
                onPress={() => this.handleIncorrect()}
                style={styles.btn}
                block
                danger>
                <Text style={styles.btnText}>INCORRECT</Text>
              </Button>
              <Button
                onPress={() => this.handleShowQuestion()}
                style={[styles.btn, { marginTop: 30 }]}
                block
                warning>
                <Text style={styles.btnText}>SHOW QUESTION</Text>
              </Button>
            </View>))
          :
          (<Results
            cards={deck.questions.length}
            deck={deck.title}
            navigation={navigation}
          />)
        }

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
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

function mapStateToProps({ decks, cardSide, cardNr, score }, { navigation }) {
  const id = navigation.state.params.id
  return {
    cardNr,
    cardSide,
    deck: decks[id],
    id,
    score
  }
}

export default connect(mapStateToProps)(CardFront);
