/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{'this is circle CI Project'}</Text>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    color: 'red',
  },
});
