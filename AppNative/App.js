/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {TabNavigationContainer} from './src/navigation/navigators/tab-navigation';

import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

function HomeDrawerScreen({navigation}) {
  return <TabNavigationContainer />;
}

function NotificationsDrawerScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Bem vindo a tela de notificações</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Text>Testando abertura de modal:</Text>
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title="Open Modal"
      />
    </View>
  );
}

function ModalScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={NotificationsDrawerScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen name="MyModal" component={ModalScreen} />
    </RootStack.Navigator>
  );
}

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeDrawerScreen} />
          <Drawer.Screen name="Notifications" component={RootStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
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
