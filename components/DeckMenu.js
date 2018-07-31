import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, StyleSheet} from 'react-native'
import { handleInitialData } from '../actions/shared';

class DeckMenu extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    console.log("W DECKU", this.props)
    return(
      <View>
        <Text>MENU</Text>
      </View>
    )
  }
}

function mapStateToProps({decks, score}){
  return{
    decks,
    score
  }
}

export default connect(mapStateToProps)(DeckMenu);