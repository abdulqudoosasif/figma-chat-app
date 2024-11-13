import { View, Text } from 'react-native'
import React from 'react'

import Stories from '../../components/Home/Stories'
import Chats from '../../components/Channel/channelChats'
import { ScrollView } from 'react-native'
import Header from '../../components/Channel/chennalHeader'
const Contacts = () => {
  return (
    
    <View className=' bg-black h-full flex-col'>
    <Header />
    <Stories />
    <ScrollView  className=' bg-white rounded-t-3xl p-2  py-5'>
        <Chats />
    </ScrollView>
</View>
  )
}

export default Contacts