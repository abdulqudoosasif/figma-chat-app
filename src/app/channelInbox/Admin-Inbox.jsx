import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  Alert,
  Image,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { Stack, useRouter } from "expo-router";
import Channel from '../../assets/images/Channel.png';

const Index = () => {
  const router = useRouter();
  const [messages, setMessages] = useState([
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [productModalVisible, setProductModalVisible] = useState(false);
  const [productImage, setProductImage] = useState(null);
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSend = () => {
    if (newMessage.trim() || selectedMedia.length > 0) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: newMessage.trim(),
          images: selectedMedia,
        },
      ]);
      setNewMessage("");
      setSelectedMedia([]);
    }
  };

  const pickImageFromGallery = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the gallery is required."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
      allowsEditing: false,
    });

    if (!result.canceled) {
      setSelectedMedia((prevSelectedMedia) => [
        ...prevSelectedMedia,
        ...result.assets.map((asset) => asset.uri),
      ]);
      setShowOptions(false);
    }
  };

  const pickProductImageFromGallery = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the gallery is required."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      quality: 1,
      allowsEditing: false,
    });

    if (!result.canceled) {
      setProductImage(result.assets[0].uri);
    }
  };

  const captureImageWithCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the camera is required."
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedMedia((prevSelectedMedia) => [
        ...prevSelectedMedia,
        result.assets[0].uri,
      ]);
      setShowOptions(false);
    }
  };

  const handleSendProduct = () => {
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        product: {
          image: productImage,
          description: productDescription,
          price: productPrice,
        },
      },
    ]);
    setProductModalVisible(false);
    setProductImage(null);
    setProductDescription("");
    setProductPrice("");
  };

  const openImageModal = (imageUri) => {
    setModalImage(imageUri);
    setModalVisible(true);
  };
  const handleBuyNow = (product) => {
    router.push({
      pathname: "/Inbox/BuyNowScreen"
    });
  };
  return (
    <>
          <Stack.Screen
          options={{
            headerTitle: '',
            headerLeft: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => router.back()}>
                  <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>
                <Image source={Channel} style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }} />
                <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: 'bold' }}>Direct Connect</Text>
              </View>
            )
           
          }}
        />

    <SafeAreaView className="flex-1 bg-white">
      <TouchableWithoutFeedback
        onPress={() => {
          showOptions && setShowOptions(false);
          Keyboard.dismiss();
        }}
        >
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={100}
          >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-3">
            {messages.map((message) => (
              <View
              key={message.id}
              className="self-end bg-[#20A090] p-3 rounded-b-lg rounded-tl-lg max-w-[260px] mb-3"
              >
                {message.product ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => openImageModal(message.product.image)}
                      >
                      <Image
                        source={{ uri: message.product.image }}
                        className="w-[240px] h-[40vh] rounded-lg"
                        />
                    </TouchableOpacity>
                    <Text className="text-white">
                      {message.product.description}
                    </Text>
                    <View className="flex-row justify-between items-center mt-2">
                      <Text className="text-gray-600">
                        ${message.product.price}
                      </Text>
                      <TouchableOpacity
                        onPress={() => handleBuyNow(message.product)}
                        className="px-2 py-2 rounded-lg bg-white ml-4 flex"
                        >
                        <Text className="text-black font-semibold text-xs">
                          Buy Now
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : message.images && message.images.length > 0 ? (
                  <View className="flex-row flex-wrap">
                    {message.images.map((image, index) => (
                      <TouchableOpacity
                      key={index}
                      onPress={() => openImageModal(image)}
                      >
                        <Image
                          source={{ uri: image }}
                          className="w-32 h-32 mr-2 mb-2"
                          />
                      </TouchableOpacity>
                    ))}
                  </View>
                ) : (
                  <Text className="text-white">{message.text}</Text>
                )}
              </View>
            ))}
          </ScrollView>

          {selectedMedia.length > 0 && (
            <View className="flex-row items-center bg-gray-100 p-2 mb-2 mx-3 rounded-lg">
              {selectedMedia.map((uri, index) => (
                <Image
                key={index}
                source={{ uri }}
                className="w-16 h-16 rounded-lg mr-3"
                />
              ))}
              <TouchableOpacity
                onPress={() => setSelectedMedia([])}
                className="p-2"
                >
                <MaterialCommunityIcons
                  name="close"
                  size={24}
                  color="#FF3B30"
                  />
              </TouchableOpacity>
            </View>
          )}

          {showOptions && (
            <View className="flex-row items-center bg-gray-100 p-2 w-52 mb-2 mx-3 rounded-lg px-3 py-2 shadow-md">
              <TouchableOpacity
                onPress={pickImageFromGallery}
                className="mx-2 items-center"
                >
                <MaterialCommunityIcons
                  name="image"
                  size={24}
                  color="#20A090"
                  />
                <Text className="text-xs">Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setProductModalVisible(true)}
                className="mx-2 items-center"
                >
                <MaterialCommunityIcons name="cart" size={24} color="#20A090" />
                <Text className="text-xs">Product</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={captureImageWithCamera}
                className="mx-2 items-center"
                >
                <MaterialCommunityIcons
                  name="camera"
                  size={24}
                  color="#20A090"
                  />
                <Text className="text-xs">Camera</Text>
              </TouchableOpacity>
            </View>
          )}

          <View className="flex-row items-center  bg-white border-t border-gray-300 px-3 pt-1.5 py-1">
            <TouchableOpacity onPress={() => setShowOptions(!showOptions)}>
              <Feather
                name="paperclip"
                size={20}
                color="gray"
                className="mr-3"
                />
            </TouchableOpacity>
            <TextInput
              value={newMessage}
              onChangeText={setNewMessage}
              placeholder="Type a message"
              className="flex-1 p-3 rounded-full bg-gray-100 mr-3"
              />
            {newMessage.trim().length > 0 || selectedMedia.length > 0 ? (
              <TouchableOpacity onPress={handleSend} className="mr-3">
                <MaterialCommunityIcons name="send" size={24} color="#20A090" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => alert("Record Voice Message")}>
                <MaterialCommunityIcons
                  name="microphone"
                  size={24}
                  color="#20A090"
                  />
              </TouchableOpacity>
            )}
          </View>

          {/* Product Modal */}
          <Modal
            visible={productModalVisible}
            transparent={true}
            onRequestClose={() => setProductModalVisible(false)}
            >
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
              <View className="flex-1 justify-center items-center bg-black bg-opacity-75 p-4">
                <View className="bg-white p-4 rounded-lg w-full">
                  <Text className="text-lg font-semibold mb-2">
                    Add Product
                  </Text>
                  <TouchableOpacity onPress={pickProductImageFromGallery}>
                    <View className="bg-gray-200 h-40 mb-2 rounded-lg justify-center items-center">
                      {productImage ? (
                        <Image
                        source={{ uri: productImage }}
                        className="w-full h-full rounded-lg"
                        />
                      ) : (
                        <Text className="text-gray-500">Select Image</Text>
                      )}
                    </View>
                  </TouchableOpacity>
                  <TextInput
                    placeholder="Description"
                    value={productDescription}
                    onChangeText={setProductDescription}
                    className="border border-gray-300 p-2 mb-2 rounded-lg"
                    />
                  <TextInput
                    placeholder="Price"
                    value={productPrice}
                    onChangeText={setProductPrice}
                    keyboardType="numeric"
                    className="border border-gray-300 p-2 mb-2 rounded-lg"
                    />
                  <TouchableOpacity
                    onPress={handleSendProduct}
                    className="bg-[#20A090] py-2 rounded-lg mt-2"
                    >
                    <Text className="text-center text-white font-semibold">
                      Send
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </Modal>

          {/* Image Modal */}
          <Modal
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
            >
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View className="flex-1 justify-center items-center bg-black bg-opacity-75 p-4">
                <Image
                  source={{ uri: modalImage }}
                  className="w-full h-full rounded-lg"
                  resizeMode="contain"
                  />
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
                  </>
  );
};

export default Index;