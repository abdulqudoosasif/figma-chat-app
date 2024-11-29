import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { Entypo, FontAwesome6, Ionicons } from '@expo/vector-icons'

const Toggle = () => {
    const handleGroupClick =()=>{
        router.push('/Group')
      }
      const handleSettingClick = () => {
        router.push('/ProfileScreens/UserProfile')
      }
      const handleChannelClick = () => {
        router.push('/channelInbox/NewChannelScreen/CreateChannel')
      }
      const handleCart = () => {
        router.push('/channelInbox/NewChannelScreen/AddtoCart')
      }
  return (
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
        <TouchableOpacity style={{  paddingVertical:6,flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Ionicons name="person-add" size={20} color="black" />
          <Text style={{ marginLeft: 10 }}>Add User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingVertical:6, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}  onPress={handleChannelClick}>
          <Ionicons name="chatbox-ellipses" size={20} color="black" />
          <Text style={{ marginLeft: 10 }}>Create Channel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical:6, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}   onPress={handleGroupClick}>
        <FontAwesome6 name="user-group" size={20} color="black" />
          <Text style={{ marginLeft: 10 }}>Create Group</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingVertical:6, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} onPress={handleSettingClick}>
          <Ionicons name="settings" size={20} color="black" />
          <Text style={{ marginLeft: 10 }}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical:6, flexDirection: 'row', alignItems: 'center' }} onPress={handleCart}>
        <Entypo name="shopping-cart" size={20} color="black" />
          <Text style={{ marginLeft: 10 }}>Cart</Text>
        </TouchableOpacity>ß
        <TouchableOpacity style={{ paddingVertical:6, flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="help-circle" size={20} color="black" />
          <Text style={{ marginLeft: 10 }}>Help</Text>
        </TouchableOpacity>
      </View>
  )
}

export default Toggle