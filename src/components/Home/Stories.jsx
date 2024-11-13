import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import MyStatus from '../../assets/images/pfp.png'
import status1 from '../../assets/images/story-1.png'
import status2 from '../../assets/images/story-2.png'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Stories = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className='items-start'>
                <View className='py-5 px-2 flex-row gap-5 items-center'>
                    <View className='flex flex-col items-center justify-center'>
                        <View className='border-2 border-purple-800 rounded-full p-[1px]'>
                            <Image className='w-14 h-14' source={MyStatus} />
                            <TouchableOpacity className='absolute right-0 bottom-0 '>
                                <MaterialCommunityIcons name='plus-circle' color='white' />
                            </TouchableOpacity>
                        </View>
                        <Text className='text-white pt-1 text-xs'>My Status</Text>
                    </View>
                    <View className='flex-row gap-2 pb-[7px]'>
                        <View className='flex flex-col items-center justify-center'>
                            <View className='border-2 border-purple-800 rounded-full p-[1px]'>
                                <Image className='w-14 h-14' source={status1} />
                            </View>
                            <Text className='text-white pt-1 text-xs'>Adil</Text>
                        </View>
                        <View className='flex flex-col items-center justify-center'>
                            <View className='border-2 border-purple-800 rounded-full p-[1px]'>
                                <Image className='w-14 h-14' source={status2} />
                            </View>
                            <Text className='text-white pt-1 text-xs'>Marina</Text>
                        </View>
                        <View className='flex flex-col items-center justify-center'>
                            <View className='border-2 border-purple-800 rounded-full p-[1px]'>
                                <Image className='w-14 h-14' source={status1} />
                            </View>
                            <Text className='text-white pt-1 text-xs'>Adil</Text>
                        </View>
                        <View className='flex flex-col items-center justify-center'>
                            <View className='border-2 border-purple-800 rounded-full p-[1px]'>
                                <Image className='w-14 h-14' source={status2} />
                            </View>
                            <Text className='text-white pt-1 text-xs'>Marina</Text>
                        </View>
                        <View className='flex flex-col items-center justify-center'>
                            <View className='border-2 border-purple-800 rounded-full p-[1px]'>
                                <Image className='w-14 h-14' source={status1} />
                            </View>
                            <Text className='text-white pt-1 text-xs'>Adil</Text>
                        </View>
                        <View className='flex flex-col items-center justify-center'>
                            <View className='border-2 border-purple-800 rounded-full p-[1px]'>
                                <Image className='w-14 h-14' source={status2} />
                            </View>
                            <Text className='text-white pt-1 text-xs'>Marina</Text>
                        </View>
                        <View className='flex flex-col items-center justify-center'>
                            <View className='border-2 border-purple-800 rounded-full p-[1px]'>
                                <Image className='w-14 h-14' source={status1} />
                            </View>
                            <Text className='text-white pt-1 text-xs'>Adil</Text>
                        </View>
                        <View className='flex flex-col items-center justify-center'>
                            <View className='border-2 border-purple-800 rounded-full p-[1px]'>
                                <Image className='w-14 h-14' source={status2} />
                            </View>
                            <Text className='text-white pt-1 text-xs'>Marina</Text>
                        </View>
                        <View className='flex flex-col items-center justify-center'>
                            <View className='border-2 border-purple-800 rounded-full p-[1px]'>
                                <Image className='w-14 h-14' source={status1} />
                            </View>
                            <Text className='text-white pt-1 text-xs'>Adil</Text>
                        </View>
                        <View className='flex flex-col items-center justify-center'>
                            <View className='border-2 border-purple-800 rounded-full p-[1px]'>
                                <Image className='w-14 h-14' source={status2} />
                            </View>
                            <Text className='text-white pt-1 text-xs'>Marina</Text>
                        </View>
                        
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Stories