import { View, Text, Image } from 'react-native'
import React from 'react'
import SettingsHeader from '../../components/Settings/SettingsHeader'
import pfp from '../../assets/images/pfp.png'
import key from '../../assets/images/Keys.png'
import chat from '../../assets/images/Message.png'
import notification from '../../assets/images/bell.png'
import help from '../../assets/images/Help.png'
import data from '../../assets/images/Data.png'
import users from '../../assets/images/Users.png'
import { TouchableOpacity } from 'react-native'

const UserProfile = () => {
    return (

        <View>
            <SettingsHeader />
            <View className='bg-black h-full'>
                <View className='bg-white h-full mt-5 rounded-t-3xl px-8 py-12  '>
                    <View className='flex-row items-center gap-6 border-b border-gray-300 pb-8 '>
                        <Image source={pfp} className='w-16 h-16' />
                        <View className='flex-col justify-between'>
                            <Text className='font-semibold text-xl tracking-wide'>Username</Text>
                            <Text className='text-sm font-light'>About User...</Text>
                        </View>
                    </View>
                    <View className='flex-col py-10'>
                        <TouchableOpacity className='flex-row items-center gap-5 pb-10 '>
                            <View className='bg-[#F2F8F7] rounded-full p-2'><Image source={key} className='w-7 h-7' /></View>
                            <View>
                                <Text className='text-lg font-medium'>Account</Text>
                                <Text className='text-sm font-light'>Privacy, security, change number</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex-row items-center gap-5 pb-10 '>
                            <View className='bg-[#F2F8F7] rounded-full p-2'><Image source={chat} className='w-7 h-7' /></View>
                            <View>
                                <Text className='text-lg font-medium'>Chat</Text>
                                <Text className='text-sm font-light'>Chat history, theme, wallpapers</Text>
                            </View>
                        </TouchableOpacity> 
                        <TouchableOpacity className='flex-row items-center gap-5 pb-10 '>
                            <View className='bg-[#F2F8F7] rounded-full px-3 py-2'><Image source={notification} className='w-7 h-7' /></View>
                            <View>
                                <Text className='text-lg font-medium'>Notifications</Text>
                                <Text className='text-sm font-light'>Messages, groups, and others</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex-row items-center gap-5 pb-10 '>
                            <View className='bg-[#F2F8F7] rounded-full p-2'><Image source={help} className='w-7 h-7' /></View>
                            <View>
                                <Text className='text-lg font-medium'>Help</Text>
                                <Text className='text-sm font-light'>Help center, contact us, privacy policy</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex-row items-center gap-5 pb-10 '>
                            <View className='bg-[#F2F8F7] rounded-full p-2'><Image source={data} className='w-7 h-7' /></View>
                            <View>
                                <Text className='text-lg font-medium'>Storage and data</Text>
                                <Text className='text-sm font-light'>Network usage, storage usage</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex-row items-center gap-5 pb-10 '>
                            <View className='bg-[#F2F8F7] rounded-full p-2'><Image source={users} className='w-7 h-7' /></View>
                            <View>
                                <Text className='text-lg font-medium'>Invite a friend</Text>
                                {/* <Text className='text-sm font-light'>Privacy, Security, Change Number</Text> */}
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default UserProfile