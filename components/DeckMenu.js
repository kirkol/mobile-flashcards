import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { handleInitialData } from '../actions/shared';
import { Button, Text, Header, View } from 'native-base';

class DeckMenu extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  handlePress = (id) => {
    this.props.navigation.navigate( // BARDZO WAZNY MYK - PRZESLANIE PARAMSOW DO KOLEJNEGO KOMPONENTU!!!
      'Deck',{
        id: id
      }
    )
  }

  render() {
    console.log("DECK MENU", this.props)
    const { decks } = this.props
    return (
      <View style={styles.container}>
        <Header style={styles.header}><Text style={styles.headerText}>DECK MENU</Text></Header>
        {Object.keys(decks).map((key) => (
          <Button
            key={key}
            style={styles.btn}
            onPress={() => this.handlePress(key)}
            block
            warning>
            <Text style={styles.btnText}>{decks[key].title.toUpperCase()} {decks[key].questions.length}</Text>
          </Button>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007399',
    flex: 1
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
  },
  header: {
    marginTop: 20,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  headerText: {
    color: '#ffffff',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

function mapStateToProps({ decks, score }) {
  return {
    decks,
    score
  }
}

export default connect(mapStateToProps)(DeckMenu);
