import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import pfp from '../../../assets/images/pfpch.png';
import { useRouter } from 'expo-router';


const ChannelTitle = () => {
  const router = useRouter();
  
  const handlePress = () => {
    router.push('/channelInbox');
  }

  return (
    <TouchableOpacity onPress={handlePress} className=" flex-1 flex-row gap-3 items-center  p-2 border-gray-300 border-b-[1px]">
      <Image source={pfp} style={{ width: 50, height: 50, borderRadius: 20 }} />
      <View className="flex-col">
        <Text className="font-medium text-[15px] tracking-wide">Channel name</Text>
        <Text>Recently sent/received message</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChannelTitle;
