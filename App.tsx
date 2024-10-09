import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import Header from './src/components/Header.js';
import Product from './src/components/Product.js';

const App = () => {
  const products = [
    {
      name: 'Samsung',
      color: 'red',
      price: 30000,
      image: 'https://m.media-amazon.com/images/I/71IfBk7ET0L._AC_UY218_.jpg',
    },
    {
      name: 'Iphone',
      color: 'blue',
      price: 140000,
      image: 'https://m.media-amazon.com/images/I/713SsA7gftL._AC_UL320_.jpg',
    },
    {
      name: 'Nodia',
      color: 'black',
      price: 2000,
      image: 'https://m.media-amazon.com/images/I/61FX8qveBNL._AC_UL320_.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        {products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});

export default App;
