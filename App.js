import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import { Constants } from 'expo'
import { Container, Content, Header, Text, View } from 'native-base';
import { createStackNavigator } from 'react-navigation';
import DeckMenu from './components/DeckMenu';
import Deck from './components/Deck';
import Card from './components/Card';
import DeckNew from './components/DeckNew'
import CardNew from './components/CardNew'
import Results from './components/Results'

const store = createStore(reducer, middleware)

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Stack = createStackNavigator({
  DeckMenu: {
    screen: DeckMenu,
    navigationOptions: {
      title: 'DeckMenu',
      header: null
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerForceInset: { top: 'never'},
      title: 'Deck',
    },
  },
  Card: {
    screen: Card,
    navigationOptions: {
      headerForceInset: { top: 'never'},
      title: 'Card'
    }
  },
  DeckNew: {
    screen: DeckNew,
    navigationOptions: {
      headerForceInset: { top: 'never'},
      title: 'New Deck'
    }
  },
  CardNew: {
    screen: CardNew,
    navigationOptions: {
      headerForceInset: { top: 'never'},
      title: 'New Card'
    }
  }
})

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <UdaciStatusBar backgroundColor={'#777777'} barStyle='light-content' />
          <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#007399'
  }
}
