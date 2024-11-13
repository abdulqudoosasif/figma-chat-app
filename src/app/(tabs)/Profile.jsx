import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ProfileHeader from '../../components/profile/ProfileHeader'
import UserProfile from '../Settings/UserProfile'


const Profile = () => {
  return (
  
    <View className=' h-full bg-black'>
    <UserProfile/>
    </View>
 
  )
}

export default Profile