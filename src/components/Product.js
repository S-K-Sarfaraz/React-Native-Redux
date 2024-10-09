import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {addToCart} from './redux/action';
import {useDispatch} from 'react-redux';

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();

  const handleAddToCart = item => {
    console.warn(item);
    dispatch(addToCart(item));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.itemImage} source={{uri: item.image}} />
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemColor}>{item.color}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddToCart(item)}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  itemName: {
    color: '#fff', // White text for name
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  itemColor: {
    color: '#b3b3b3', // Slightly lighter for contrast
    fontSize: 16,
  },
  itemPrice: {
    color: '#4caf50', // Green price for contrast
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  itemImage: {
    width: 200,
    height: 250,
    borderRadius: 10,
  },
  card: {
    backgroundColor: '#1a1a1a', // Dark background for black theme
    borderRadius: 10, // Rounded corners
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000', // Shadow for some depth
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // For Android shadow
  },
  button: {
    backgroundColor: '#333', // Dark button for black theme
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // White text for button
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Product;
