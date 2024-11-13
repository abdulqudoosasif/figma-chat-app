// import React, { useState } from 'react';
// import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// const ProductDetailScreen = ({ route, navigation }) => {
//   const { image, price } = route.params;
//   const [dressType, setDressType] = useState('');
//   const [size, setSize] = useState('');
//   const [color, setColor] = useState('');

//   const openVideoCamera = async () => {
//     const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
//     if (!permissionResult.granted) {
//       Alert.alert('Permission required', 'Permission to access the camera is required.');
//       return;
//     }
//     await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Videos,
//       quality: 1,
//     });
//   };

//   return (
//     <View className="flex-1 p-4 bg-white">
//       <Image source={{ uri: image }} className="w-full h-64 rounded-lg mb-4" resizeMode="contain" />
//       <Text className="text-lg font-semibold mb-2">${price}</Text>

//       <TouchableOpacity onPress={openVideoCamera} className="bg-[#20A090] py-2 rounded-lg mb-4">
//         <Text className="text-center text-white font-semibold">Capture Video</Text>
//       </TouchableOpacity>

//       <TextInput
//         placeholder="Dress Type"
//         value={dressType}
//         onChangeText={setDressType}
//         className="border border-gray-300 p-2 mb-2 rounded-lg"
//       />
//       <TextInput
//         placeholder="Size"
//         value={size}
//         onChangeText={setSize}v
//         className="border border-gray-300 p-2 mb-2 rounded-lg"
//       />
//       <TextInput
//         placeholder="Color"
//         value={color}
//         onChangeText={setColor}
//         className="border border-gray-300 p-2 mb-4 rounded-lg"
//       />

//       <View className="flex-row justify-between">
//         <TouchableOpacity onPress={() => navigation.goBack()} className="bg-gray-300 py-2 px-4 rounded-lg">
//           <Text className="text-center">Cancel</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => Alert.alert('Confirmed')} className="bg-[#20A090] py-2 px-4 rounded-lg">
//           <Text className="text-center text-white">Confirm</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ProductDetailScreen;
