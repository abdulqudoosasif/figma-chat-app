import { View, Text } from 'react-native'
import React from 'react'
import Chats from '../../components/Channel/channelChats'
import { ScrollView } from 'react-native'
import Header from '../../components/Channel/chennalHeader'
const Contacts = () => {
  return (
    
    <View className=' bg-black h-full flex-col'>
    <Header />
    <ScrollView  className=' bg-white rounded-t-3xl p-2 mt-5  py-5'>
        <Chats />
    </ScrollView>
</View>
  )
}

export default Contacts