import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LUCK_PHRASES from './constants/luckPhrases';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookieImage: require('./src/biscoito.png'),
      luckText: '',
    };

    this.handleLuckButton = this.handleLuckButton.bind(this);
  }

  handleLuckButton() {
    const randomIndex = Math.floor(Math.random() * LUCK_PHRASES.length);
    this.setState({cookieImage: require('./src/biscoitoAberto.png'),
      luckText: LUCK_PHRASES[randomIndex],
    });

  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.cookieImage} source={this.state.cookieImage} />
        <Text style={styles.luckText}>{this.state.luckText}</Text>
        <TouchableOpacity
          style={styles.luckbutton}
          onPress={this.handleLuckButton}>
          <Text> Discover your luck </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cookieImage: {
    width: 300,
    height: 300,
  },
  luckbutton: {
    border: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dd7b22',
    padding: 10,
    marginTop: 20,
  },
  luckText:{
    marginTop: 20,
    padding:10,
    textAling: 'center',

  }
});

export default App;
