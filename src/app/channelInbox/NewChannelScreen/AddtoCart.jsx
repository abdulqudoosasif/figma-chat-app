import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, Alert } from 'react-native';

import Product from '../../../assets/images/Product1.jpeg';
import { router } from 'expo-router';

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);

  const product = {
    image: Product,
    description: 'KAMIKAZI STRAWBERRY',
    price: 100,
  };

  const handleAddToCart = () => {
   router.push('/Inbox/BuyNowScreen')
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <SafeAreaView className="flex-1 bg-white ">
    <View className='px-3'>
          
      <View className="items-center mb-5">
        <Image
          source={product.image}
          className="w-full h-64 rounded-lg"
          style={{ resizeMode: 'contain' }}
        />
      </View>
      <Text className="text-lg font-bold mb-2">{product.description}</Text>
      <Text className="text-base text-gray-600 mb-5">Price: ${product.price}</Text>

    
      <View className="flex-row items-center justify-between mb-5">
        <TouchableOpacity
          onPress={decrementQuantity}
          className="w-10 h-10 rounded-full bg-gray-200 items-center justify-center"
        >
          <Text className="text-lg font-bold">-</Text>
        </TouchableOpacity>
        <TextInput
          value={quantity.toString()}
          onChangeText={(text) => setQuantity(Math.max(1, parseInt(text) || 1))}
          keyboardType="number-pad"
          className="text-center  text-lg w-16 pb-2.5 border border-gray-300 rounded-md"
        />
        <TouchableOpacity
          onPress={incrementQuantity}
          className="w-10 h-10 rounded-full bg-gray-200 items-center justify-center"
        >
          <Text className="text-lg font-bold">+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleAddToCart}
        className="bg-teal-500 py-4 rounded-lg items-center"
      >
        <Text className="text-lg text-white font-bold">Buy Now</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default AddToCart;
