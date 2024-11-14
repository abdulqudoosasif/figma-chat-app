import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons' 
import Ionicons from '@expo/vector-icons/Ionicons';
import pfp from '../../assets/images/pfp.png'
const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='Home' options={{
                headerShown: false,
                title: 'Messages',
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name='chat-processing-outline' size={size} color={color} />
                )
            }} />
            <Tabs.Screen name='Calls' options={{
                headerShown: false,
                title: 'Calls',
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name='phone-outline' size={size} color={color} />
                )
            }} />
            <Tabs.Screen name='Channel' options={{
                headerShown: false,
                title: 'Channels',
                tabBarIcon: ({ size, color }) => (
                    <Ionicons name="people-outline"  size={size} color={color}/>
                )
            }} />
            <Tabs.Screen name='Profile' options={{
                headerShown: false,
                title: 'Profile',
                tabBarIcon: () => (
                 <Image source={pfp}  className='h-8 mt-3 mb-4 w-8 rounded-full object-cover'/>
                )
            }} />
        </Tabs>
    )
}

export default _layout