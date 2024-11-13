import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";


const BuyNowScreen = ({ route }) => {
  const router = useRouter();
  //   const { image, price } = route.params;

  const [city, setCity] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [loading, setLoading] = useState(false);

  const openCamera = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      Alert.alert("Permission required", "Camera access is required.");
      return;
    }
    await ImagePicker.launchCameraAsync({ quality: 1 });
  };

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Order placed", "Your order is placed.");
      router.back();
    }, 3000);
  };

  return (
    <KeyboardAvoidingView className="flex justify-center">
      <SafeAreaView>
        <ScrollView>
          <View className=" p-4  ">
            <Image source={{ uri: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
              //   source={{ uri: image }}
              className="w-full h-64 rounded-lg" />
            <Text className="text-lg font-bold mt-4">Price: $35
              {/* {price} */}
            </Text>
            <View className='flex-col gap-3'>
              <TouchableOpacity
                onPress={openCamera}
                className="mt-4 py-2 bg-gray-200 rounded-lg"
              >
                <Text className="text-center">Open Camera</Text>
              </TouchableOpacity>

              <TextInput
                placeholder="City"
                value={city}
                onChangeText={setCity}
                className="mt-4 border p-2 rounded-lg"
              />
              <TextInput
                placeholder="Street Number"
                value={streetNumber}
                onChangeText={setStreetNumber}
                className="mt-2 border p-2 rounded-lg"
              />
              <TextInput
                placeholder="Postal Code"
                value={postalCode}
                onChangeText={setPostalCode}
                keyboardType="numeric"
                className="mt-2 border p-2 rounded-lg"
              />


              <View className="flex-row justify-between mt-4">
                {/* <TouchableOpacity
                  onPress={() => router.back()}
                  className="flex-1 mr-2 bg-gray-300 py-2 rounded-lg"
                >
                  <Text className="text-center">Cancel</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                  onPress={handleConfirm}
                  className="flex-1 ml-2 bg-[#20A090]  py-2 rounded-lg"
                >
                  <Text className="text-center text-white">Checkout</Text>
                </TouchableOpacity>
              </View>
            </View>
            {loading && (
              <Modal transparent>
                <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
                  <ActivityIndicator size="large" color="#ffffff" />
                </View>
              </Modal>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default BuyNowScreen;
