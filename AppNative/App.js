/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import {PostList} from './src/navigation/products/post-list.js';
import {TabNavigationContainer} from './src/navigation/navigators/tab-navigation';

export default class App extends Component {
  render() {
    return <TabNavigationContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  sectionTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: '600',
    color: Colors.black,
  },
  postContainer: {
    // alignContent: 'flex-start',
    // alignItems: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

//export default App;
