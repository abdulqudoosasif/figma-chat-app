import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import search from '../../assets/images/search.png'
import { router } from 'expo-router'
import Toggle from '../Toggle'


const Header = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false)

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible)
  }
  const handleSearch = () => {
    router.push('/Search')
  }

  return (
    <View className='flex-row justify-between items-center pt-12 pb-3 px-6'>
      <TouchableOpacity  className='border border-white rounded-full p-2 w-fit' onPress={handleSearch}>
        <Image className='w-4 h-4' source={search}  />
      </TouchableOpacity>
      <View>
        <Text className='text-white text-xl font-medium'>Home</Text>
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

export default Header
