import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>0</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 35,
    backgroundColor: 'green',
    // height: 60,
  },
});

export default Header;
