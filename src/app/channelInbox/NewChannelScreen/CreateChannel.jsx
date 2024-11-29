import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';

const CreateChannel = () => {
  const [channelName, setChannelName] = useState('');
  const [channelDescription, setChannelDescription] = useState('');
  const [channelImage, setChannelImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setChannelImage(result.assets[0].uri);
    }
  };

  const handleCreateChannel = () => {
    router.push('/channelInbox/Admin-Inbox');
    alert('Channel Created!');
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          className="bg-white flex-1 p-4"
          keyboardShouldPersistTaps="handled"
        >
          <TouchableOpacity
            className="w-32 h-32 bg-gray-200 rounded-full justify-center items-center self-center mb-6"
            onPress={pickImage}
          >
            {channelImage ? (
              <Image source={{ uri: channelImage }} className="w-32 h-32 rounded-full" />
            ) : (
              <Text className="text-gray-500 text-center">Select Channel DP</Text>
            )}
          </TouchableOpacity>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
            placeholder="Channel Name"
            value={channelName}
            onChangeText={setChannelName}
          />
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 h-20"
            placeholder="Channel Description"
            value={channelDescription}
            onChangeText={setChannelDescription}
            multiline
          />
          <Text className="text-lg font-bold text-center mb-6">Create Your Channel</Text>
          <TouchableOpacity
            className="bg-blue-500 py-3 rounded-lg items-center"
            onPress={handleCreateChannel}
          >
            <Text className="text-white font-bold text-lg">Create</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CreateChannel;
