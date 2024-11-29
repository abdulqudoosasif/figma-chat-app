import React, { useState } from "react";
import {View,Text,Image,TouchableOpacity,ScrollView,Alert,Modal,TextInput,KeyboardAvoidingView,Platform,} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";
import Prodect from "../../assets/images/Product1.jpeg";

const BuyNowScreen = ({ route }) => {
  const [activeButton, setActiveButton] = useState("Intown");
  const [isVideoSent, setIsVideoSent] = useState(false);
  const [capturedMedia, setCapturedMedia] = useState(null);
  const [isPaymentPopupVisible, setPaymentPopupVisible] = useState(false);

  const handleButtonPress = (button) => {
    setActiveButton(button);
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the camera is required."
      );
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
      quality: 1,
    })
    if (!result.canceled) {
      setCapturedMedia(result.assets[0].uri);
      setIsVideoSent(true);
    }
  };

  const handlePayNow = () => {
    setPaymentPopupVisible(true);
  };

  const closePopup = () => {
    setPaymentPopupVisible(false);
  };

  const handleSubmitPayment = () => {
    Alert.alert("Payment successful!", "Your payment has been processed.");
    setTimeout(() => {
      setPaymentPopupVisible(false); // Close the popup after 3 seconds
    }, 3000);
  };

  return (
    <ScrollView className="bg-white px-4">
      <View className="flex-row gap-5 items-center">
        <View className="mb-2">
          <Image source={Prodect} style={{ width: 150, height: 200 }} />
          <Text className="text-[12px] my-2">KAMIKAZI STRAWBERRY</Text>
        </View>
        <View className="flex-col justify-between items-center">
          <View className="items-center mb-14">
            <Text className="text-[14px] font-medium mt-2">Price : $125/-</Text>
            <Text className="text-sm text-gray-500 mb-3">
              Minimum Order $10,000/-
            </Text>
          </View>
          <TouchableOpacity className="bg-teal-500 py-2 px-4 rounded-full my-2">
            <Text className="text-white">Order Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="items-center">
        <Text className="text-xl font-medium mt-5">How To Purchase</Text>
        <View className="flex-row gap-3 my-3">
          <TouchableOpacity
            onPress={() => handleButtonPress("Intown")}
            className={`py-2 px-7 rounded-full ${
              activeButton === "Intown" ? "bg-teal-500" : "bg-[#EDF7F6]"
            }`}
          >
            <Text className={activeButton === "Intown" ? "text-white" : "text-black"}>
              Intown
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress("OT")}
            className={`py-2 px-11 rounded-full ${
              activeButton === "OT" ? "bg-teal-500" : "bg-[#EDF7F6]"
            }`}
          >
            <Text className={activeButton === "OT" ? "text-white" : "text-black"}>
              OT
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="items-center mt-5 mb-3">
        <TouchableOpacity
          onPress={openCamera}
          className="bg-teal-500 py-2 px-16 rounded-full my-2 items-center"
        >
          <Text className="text-white">Send a Verification Video</Text>
        </TouchableOpacity>
        <Text className="text-xs text-gray-500 mt-1">
          $10,000 in hand or Direct written on paper
        </Text>
      </View>

      {isVideoSent && capturedMedia && (
        <View className="items-center mt-3">
          <Text className="text-gray-600 mb-2">Video sent successfully!</Text>
          <Video
            source={{ uri: capturedMedia }}
            style={{ width: 200, height: 300 }}
            useNativeControls
            resizeMode="contain"
          />
          <View className="items-center mt-5">
            <TouchableOpacity
              onPress={handlePayNow}
              className="bg-teal-500 py-2 px-16 rounded-full my-2 items-center"
            >
              <Text className="text-white">Pay Now</Text>
            </TouchableOpacity>
            <Text className="text-xs text-gray-500 mt-1">
              Proceed with payment to confirm your order.
            </Text>
          </View>
        </View>
      )}

      <View className="items-center mt-3 mb-5">
        <TouchableOpacity className="bg-[#EDF7F6] py-2 px-11 rounded-full my-2 items-center">
          <Text className="text-black">Shipping Channel link</Text>
        </TouchableOpacity>
        <Text className="text-xs text-gray-500 mt-1 text-center">
          Your payment has been received; this channel will give you updates
          regarding your delivery
        </Text>
      </View>

      {/* Payment Popup */}
      <Modal visible={isPaymentPopupVisible} transparent animationType="slide">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              padding: 20,
              width: "90%",
            }}
          >
            <Text className="text-xl font-medium mb-4">Payment Details</Text>
            <TextInput
              placeholder="Card Number"
              className="border border-gray-300 rounded px-3 py-2 mb-4"
              keyboardType="number-pad"
            />
            <TextInput
              placeholder="Expiry Date (MM/YY)"
              className="border border-gray-300 rounded px-3 py-2 mb-4"
              keyboardType="number-pad"
            />
            <TextInput
              placeholder="Card Code (CVC)"
              className="border border-gray-300 rounded px-3 py-2 mb-4"
              keyboardType="number-pad"
            />
            <TouchableOpacity
              className="bg-teal-500 py-2 px-4 rounded-full"
              onPress={handleSubmitPayment}
            >
              <Text className="text-white text-center">Submit Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={closePopup}
              className="mt-3 bg-gray-300 py-2 px-4 rounded-full"
            >
              <Text className="text-center">Cancel</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </ScrollView>
  );
};

export default BuyNowScreen;
