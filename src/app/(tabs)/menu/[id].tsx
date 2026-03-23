import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const ProductDetailsScreen = () => {
  const {id} = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{headerTitle: 'Details'}} />
      <Text>product : {id}  </Text>
    </View>
  )
}
export default ProductDetailsScreen