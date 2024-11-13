import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import search from '../../assets/images/search.png'
import { router } from 'expo-router'


const CallHeader = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false)

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible)
  }
  const handleSettingClick = () => {
    router.push('/Settings')
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
          <View style={{
            backgroundColor: 'white',
            width: '70%',
            paddingVertical: 20,
            paddingHorizontal: 15,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.4,
            shadowRadius: 10,
            elevation: 5,
          }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
              <Ionicons name="person-add" size={20} color="black" />
              <Text style={{ marginLeft: 10 }}>Add User</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
              <Ionicons name="chatbox-ellipses" size={20} color="black" />
              <Text style={{ marginLeft: 10 }}>Create Channel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }} onPress={handleSettingClick}>
              <Ionicons name="settings" size={20} color="black" />
              <Text style={{ marginLeft: 10 }}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="help-circle" size={20} color="black" />
              <Text style={{ marginLeft: 10 }}>Help</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default CallHeader
