import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { Button, Text, View } from 'native-base';
import { toggleCard } from '../actions/cardSide';
import { nextCard } from '../actions/cardNr';
import Results from './Results'
import { updateScore } from '../actions/score';

class CardFront extends Component {

  handleAnswer = (answer) => {
    const { dispatch, cardNr, deck, score } = this.props
    dispatch(toggleCard("answer"))
    setTimeout(() => {
      dispatch(toggleCard("question"))
    }, 500)
    if (answer === deck.questions[cardNr].answer) {
      dispatch(updateScore(score + 1))
    }
    dispatch(nextCard(cardNr + 1))
  }

  handleShow = () => {
    console.log(this.props)
    this.props.dispatch(toggleCard('dupa'))
    setTimeout(() => {
      this.props.dispatch(toggleCard("question"))
    }, 500)
  }

  render() {
    const { deck, cardSide, cardNr, score, navigation } = this.props
    console.log(this.props)
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
              <Button
                onPress={() => this.handleShow()}
                style={[styles.btn, { marginTop: 100 }]}
                block
                warning>
                <Text style={styles.btnText}>SHOW ANSWER</Text>
              </Button>
            </View>)
            :
            (<Text style={styles.answerText}>
              {(cardNr-1===-1)
                ?
                deck.questions[0].answer.toString().toUpperCase()
                :
                (deck.questions[cardNr - 1].answer.toString().toUpperCase())}
            </Text>))
          :
          (<Results
            cards={deck.questions.length}
            deck={deck.title}
            //navigation={navigation}
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
    marginTop: 80,
    fontSize: 70,
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
