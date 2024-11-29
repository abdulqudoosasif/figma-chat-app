import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import search from '../../assets/images/search.png'
import { router } from 'expo-router'
import Toggle from '../Toggle'


const CallHeader = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false)

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible)
  }
  return (
    <View className='bg-black flex-row justify-between items-center pt-12 pb-3 px-6'>
      <View className='border border-white rounded-full p-2 w-fit'>
        <Image className='w-4 h-4' source={search} />
      </View>
      <View>
        <Text className='text-white text-xl font-medium'>Calls</Text>
      </View>
      <TouchableOpacity onPress={toggleSidebar}>
        <Ionicons name="ellipsis-vertical" size={24} color="white" />
      </TouchableOpacity>

      <Modal
        visible={isSidebarVisible}
        transparent={true}>
        <TouchableOpacity
          style={{
            flex: 1,
            paddingTop: 50,
            justifyContent: 'flex-start',
            alignItems: 'flex-end'
          }}
          onPress={toggleSidebar}
        >
         <Toggle/>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default CallHeader
