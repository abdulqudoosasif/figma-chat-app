import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import pfp from '../../assets/images/pfp.png';
import { useRouter } from 'expo-router';


const ChatTitle = () => {
  const router = useRouter();
  
  const handlePress = () => {
    router.push('/Inbox');
  }

  return (
    <TouchableOpacity onPress={handlePress} className=" flex-1 flex-row gap-3 items-center  p-2 border-gray-300 border-b-[1px] ">
      <Image source={pfp} className='w-16 h-16 rounded-full'  />
      <View className="flex-col">
        <Text className="font-medium text-[15px] tracking-wide">Chat Name</Text>
        <Text>Recently sent/received message</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatTitle;
