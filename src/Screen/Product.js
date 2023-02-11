import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ProductScreen = (props) => {
  const [list, setList] = useState(null);

  useEffect(() => {
    try{
      fetch('http://10.0.2.2:3000/products')
      .then(res => res.json())
      .then(data => setList(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  console.log(list);

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDesc}>{item.desc}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  itemContainer: {
    flex: 1,
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemDesc: {
    fontSize: 16,
    color: '#666'
  },
  itemPrice: {
    fontSize: 16,
    color: '#333'
  }
});

export default ProductScreen;