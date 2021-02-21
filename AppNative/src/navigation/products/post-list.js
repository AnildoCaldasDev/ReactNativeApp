/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
//https://reactjs.org/docs/lists-and-keys.html#keys

export class PostList extends Component {
  render() {
    let posts = [
      {title: 'React Native', description: 'Desc react'},
      {title: 'C#', description: 'Desc c#'},
      {title: 'Java', description: 'Desc java'},
      {title: 'Sql', description: 'Desc sql'},
      {title: 'Java', description: 'Desc java'},
      {title: 'C#', description: 'Desc c#'},
      {title: 'Python', description: 'Desc python'},
      {title: 'Java', description: 'Desc java'},
    ];

    return (
      <ScrollView style={styles.container}>
        {posts.map((p, index) => (
          <View key={index} style={styles.postContainer}>
            <Text style={styles.postTitle}>{p.title}</Text>
            <Text style={styles.postDescription}>{p.description}</Text>
          </View>
        ))}
      </ScrollView>
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
