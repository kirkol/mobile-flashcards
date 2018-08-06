import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet} from 'react-native'
import { handleInitialData } from '../actions/shared';
import { Button, Text, Header, View } from 'native-base';
import { setLocalNotification, clearLocalNotification } from '../utils/helpers';
import { CheckBox } from 'react-native-elements'
import { toggleNotfs } from '../actions/notifications';

class DeckMenu extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  handlePressDeck = (id) => {
    this.props.navigation.navigate( // BARDZO WAZNY MYK - PRZESLANIE PARAMSOW DO KOLEJNEGO KOMPONENTU!!!
      'Deck', {
        id: id
      },
    )
  }

  handlePressNew = () => {
    this.props.navigation.navigate('DeckNew')
  }

  handleClick = () => { // IMPORTANT!!! I DON'T ASK USER FOR PERMISSION, CAUSE Permissions.NOTIFICATIONS DOESN'T SHOW ME ANY POP UP (OTHERS, LIKE CAMERA, LOCATION, ETC. ARE OK)
    const {dispatch, notifications} = this.props
    if(!notifications){
      clearLocalNotification()
      .then(setLocalNotification())
      alert('Notification has been set')
    }else{
      clearLocalNotification()
    }
    dispatch(toggleNotfs(!notifications))
  }

  render() {
    const { decks, notifications } = this.props

    return (
      <View style={styles.container}>
        <Header style={styles.header}><Text style={styles.headerText}>DECK MENU</Text></Header>
        {Object.keys(decks).map((key) => (
          <Button
            key={key}
            style={styles.btn}
            onPress={() => this.handlePressDeck(key)}
            block
            warning>
            <Text style={styles.btnText}>{decks[key].title.toUpperCase()} {decks[key].questions.length} card(s)</Text>
          </Button>
        ))}
        <Button
          style={styles.btn}
          onPress={() => this.handlePressNew()}
          block
          success>
          <Text style={styles.btnText}>ADD NEW DECK</Text>
        </Button>
        <View>
          <CheckBox
            containerStyle={styles.btn}
            right
            title='Notifications'
            checked={notifications}
            onPress={this.handleClick}
          />
        </View>
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
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20
  },
})

function mapStateToProps({ decks, score, notifications }) {
  return {
    decks,
    score,
    notifications
  }
}

export default connect(mapStateToProps)(DeckMenu);
