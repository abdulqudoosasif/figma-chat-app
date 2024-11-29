import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SettingsHeader from '../../components/Settings/SettingsHeader';
import pfp from '../../assets/images/pfp.png';
import key from '../../assets/images/Keys.png';
import chat from '../../assets/images/Message.png';
import notification from '../../assets/images/bell.png';
import help from '../../assets/images/Help.png';
import data from '../../assets/images/Data.png';
import users from '../../assets/images/Users.png';
import { useRouter } from 'expo-router';

const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const router =useRouter();
useEffect(()=>{
  const fetchProfile=async()=>{
    try{
    setLoading(true);
    const token =await AsyncStorage.getItem('token')
    if (!token){
        console.log('No token found ')
        return;
    }
    const response= await fetch("https://b7e4-2407-d000-8-43ef-9880-55-a520-2c03.ngrok-free.app/api/profile/",{
        method:'GET',
        headers:{
            Authorization:`Bearer ${token}`,
            'Content-Type':'application/json'
        }
    })
    if(response.ok){
        const data=await response.json()
        setUserData(data)
    }
    else if(response.status === 401){
        console.error('token  expired')
    }
    else{
        console.error('fetching error', response.status)
    }
  } catch(error){
    console.error('Faild to Fetch Profile', error.message)
  }finally{
    setLoading(false)
  }
}
fetchProfile()
},[])

    if (loading) {
        return (
            <View className="flex-1 justify-center bg-slate-50 items-center">
                <ActivityIndicator size="large"  />
            </View>
        );
    }

    if (!userData) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text>Failed to load user profile.</Text>
            </View>
        );
    }
    const { profile_picture, bio, status, first_name } = userData;
   const handleAbout=()=>{
    router.push('ProfileScreens/AboutUser')
   }
    return (
        <View>
            <SettingsHeader />
            <View className="bg-black h-full">
                <View className="bg-white h-full mt-5 rounded-t-3xl px-8 py-12">
                    <View className='flex-row border-b border-gray-300 pb-8 justify-between items-center'>
                    <View className="flex-row items-center gap-6 ">
                        <Image source={profile_picture ? { uri: profile_picture } : pfp} className="w-16 h-16 rounded-full" />
                        <View className="flex-col justify-between">
                        <Text className="font-semibold text-xl tracking-wide">{first_name || 'Username'}</Text>
                            <Text className="text-sm font-light">{bio || 'About User...'}</Text>
                            <Text className="text-sm font-light">{status || 'No status available'}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleAbout}>
                        <Text className='font-semibold text-blue-500'>
                            Edit Profile
                        </Text>
                    </TouchableOpacity>
                    </View>
                    <View className="flex-col py-10">
                        <TouchableOpacity className="flex-row items-center gap-5 pb-10">
                            <View className="bg-[#F2F8F7] rounded-full p-2">
                                <Image source={key} className="w-7 h-7" />
                            </View>
                            <View>
                                <Text className="text-lg font-medium">Account</Text>
                                <Text className="text-sm font-light">Privacy, security, change number</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row items-center gap-5 pb-10">
                            <View className="bg-[#F2F8F7] rounded-full p-2">
                                <Image source={chat} className="w-7 h-7" />
                            </View>
                            <View>
                                <Text className="text-lg font-medium">Chat</Text>
                                <Text className="text-sm font-light">Chat history, theme, wallpapers</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row items-center gap-5 pb-10">
                            <View className="bg-[#F2F8F7] rounded-full px-3 py-2">
                                <Image source={notification} className="w-7 h-7" />
                            </View>
                            <View>
                                <Text className="text-lg font-medium">Notifications</Text>
                                <Text className="text-sm font-light">Messages, groups, and others</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row items-center gap-5 pb-10">
                            <View className="bg-[#F2F8F7] rounded-full p-2">
                                <Image source={help} className="w-7 h-7" />
                            </View>
                            <View>
                                <Text className="text-lg font-medium">Help</Text>
                                <Text className="text-sm font-light">Help center, contact us, privacy policy</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row items-center gap-5 pb-10">
                            <View className="bg-[#F2F8F7] rounded-full p-2">
                                <Image source={data} className="w-7 h-7" />
                            </View>
                            <View>
                                <Text className="text-lg font-medium">Storage and data</Text>
                                <Text className="text-sm font-light">Network usage, storage usage</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row items-center gap-5 pb-10">
                            <View className="bg-[#F2F8F7] rounded-full p-2">
                                <Image source={users} className="w-7 h-7" />
                            </View>
                            <View>
                                <Text className="text-lg font-medium">Invite a friend</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default UserProfile;
