import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ProfileHeader from '../../components/profile/ProfileHeader'


const Profile = () => {
  return (
  
    <View className=' h-full bg-black'>
    <ProfileHeader/>
            <View showsVerticalScrollIndicator={false} className='bg-white flex-1 rounded-t-3xl p-2 py-5'>
            
            </View>
    </View>
 
  )
}

export default Profile