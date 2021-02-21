/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {PostList} from '../products/post-list';
import {Colors} from 'react-native/Libraries/NewAppScreen';
//artigo tab menu: https://www.jonataoliveira.com.br/tabbar-personalizada-em-react-native/
//npm install react-native-linear-gradient --save
//npm install --save react-native-vector-icons

function HomeScreen() {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Tela de Settings</Text>
    </View>
  );
}

function TreinoScreen() {
  return (
    <View style={styles.container}>
      <Text>Tela de treinos</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export class TabNavigationContainer extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              switch (route.name) {
                case 'Home':
                  iconName = 'home';
                  break;
                case 'Produtos':
                  iconName = 'list';
                  break;
                case 'Notifications':
                  iconName = 'bell';
                  break;
                case 'Treinos':
                  iconName = 'plus';
                  break;
                case 'Settings':
                  iconName = 'settings';
                  break;
                default:
                  iconName = 'circle';
                  break;
              }

              if (route.name === 'Treinos') {
                return (
                  <View>
                    <LinearGradient
                      style={styles.iconTabRound}
                      start={{x: 0, y: 1}}
                      end={{x: 0, y: 0}}
                      colors={['#154DFC', '#E0F9F8']}>
                      <Icon
                        name="plus"
                        size={29}
                        color={focused === true ? color : '#FFF'}
                      />
                    </LinearGradient>
                  </View>
                );
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#0A13C9',
            inactiveTintColor: '#777',
            showLabel: false,
            style: {
              backgroundColor: '#CAFCFC',
            },
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen
            name="Produtos"
            options={{tabBarBadge: 9}}
            component={PostList}
          />
          <Tab.Screen name="Treinos" component={TreinoScreen} />
          <Tab.Screen name="Notifications" component={NotificationsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTabRound: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#9C27B0',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
