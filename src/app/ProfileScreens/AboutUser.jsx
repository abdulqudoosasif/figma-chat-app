import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

const AboutUser = () => {
    const router =useRouter()
  const [userData, setUserData] = useState({
    profile_picture: null,
    name: "",
    bio: "",
    status: "",
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false); 
  const [error, setError] = useState("");

  const handleImagePick = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access gallery is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setUserData((prev) => ({
        ...prev,
        profile_picture: pickerResult.assets[0].uri,
      }));
    }
  };

  const handleSave = async () => {
    setLoading(true);
    setError(""); 
  
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        setError("Authentication token not found. Please log in again.");
        setLoading(false);
        return;
      }
  
      const formData = new FormData();
  
      if (userData.profile_picture) {
        const fileName = userData.profile_picture.split("/").pop();
        const fileType = fileName.split(".").pop();
  
        formData.append("profile_picture", {
          uri: userData.profile_picture,
          name: fileName,
          type: `image/${fileType}`,
        });
      }
  
      formData.append("first_name", userData.name);
      formData.append("bio", userData.bio);
      formData.append("status", userData.status);
  
      const response = await fetch(
        "https://b7e4-2407-d000-8-43ef-9880-55-a520-2c03.ngrok-free.app/api/profile/",
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        setUserData(data); 
        setEditing(false);
        alert("Profile edited successfully!");
        router.push('/Profile')
       
      } else {
        const errorData = await response.json();
        setError(
          errorData.message || "Failed to save profile. Please try again."
        );
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-6">
      <View className="items-center">
        <TouchableOpacity onPress={handleImagePick}>
          <Image
            source={
              userData.profile_picture
                ? { uri: userData.profile_picture }
                : require("../../assets/images/pfp.png")
            }
            className="w-24 h-24 rounded-full border"
          />
        </TouchableOpacity>
       
          <Text className="text-gray-500 mt-2 text-sm">
            Tap to change picture
          </Text>
     
      </View>

      <View className="mt-6">
      
          <>
          
            <TextInput
              placeholder="Username"
              value={userData.name}
              onChangeText={(text) =>
                setUserData((prev) => ({ ...prev, name: text }))
              }
              className="border-b pb-2 mb-4"
            />
            <TextInput
              placeholder="Bio"
              value={userData.bio}
              onChangeText={(text) =>
                setUserData((prev) => ({ ...prev, bio: text }))
              }
              className="border-b pb-2 mb-4"
            />
            <TextInput
              placeholder="Status"
              value={userData.status}
              onChangeText={(text) =>
                setUserData((prev) => ({ ...prev, status: text }))
              }
              className="border-b pb-2 mb-4"
            />
          </>
     
      </View>

      <View className="mt-6">
     
          <TouchableOpacity
            onPress={handleSave}
            className="bg-green-500 py-3 rounded"
          >
            <Text className="text-white text-center">Save</Text>
          </TouchableOpacity>
        
      </View>

      {error ? (
        <Text className="text-red-500 text-center mt-4">{error}</Text>
      ) : null}
    </View>
  );
};

export default AboutUser;
