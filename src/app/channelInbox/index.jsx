import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, } from 'react-native';

const Inbox = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!' },
    { id: 2, text: 'How are you?' },
  ])
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
        {/* Messages area */}
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10 }}>
          {messages.map((message) => (
            <View 
              key={message.id} 
              style={{ 
                alignSelf: '',backgroundColor: '#e0e0e0', padding: 10, 
                borderRadius: 10, maxWidth: '80%', marginBottom: 10 
              }}>
              <Text>{message.text}</Text>
            </View>
          ))}
        </ScrollView>
       <View className='py-3  bg-gray-400 mx-4 rounded-2xl flex  items-center justify-center'>
        <Text className='text-xl font-semibold'>
          Mute
        </Text>
        </View>   
    </SafeAreaView>
  );
};
export default Inbox;