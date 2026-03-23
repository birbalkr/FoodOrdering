import Button from '@/components/Button';
import { defaultImage } from '@/components/ProductListItem';
import products from '@assets/data/products';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const sizes = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const [selectedSize, setSelectedSize] = useState('M');

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: product.name }} />
      <Image source={{ uri: product.image || defaultImage }} style={styles.image} />

      <Text>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map(size => (
          <Pressable 
          onPress={()=>{setSelectedSize(size)}}
          style={[styles.size,  { 
          backgroundColor: selectedSize === size ? 'gainsboro' : 'white'
        }]} key={size}>
            <Text style={[styles.sizeText, {color: selectedSize === size ? 'black' : 'gray'}]}>{size}</Text>
          </Pressable>
        ))}

      </View>


      <Text style={styles.price}>$ {product.price}</Text>

      <Button text='Add to cart' onPress={() => {}} />
    </View>
  )
}
export default ProductDetailsScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,

  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    justifyContent:'center',
    alignItems:'center',
  },
  sizeText: {
    fontSize:20,
    fontFamily:'bold',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:'auto',
  },



})