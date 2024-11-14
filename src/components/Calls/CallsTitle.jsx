import { View, Text, Image } from 'react-native'
import React from 'react'
import pfp from '../../assets/images/pfp.png'
import incommingCall from '../../assets/images/incomming-call.png'
import call from '../../assets/images/call.png'
import videoCam from '../../assets/images/vid-cam.png'

const CallsTitle = () => {
    return (
        <View className='flex-col gap-2  p-2 border-b border-gray-300'>
            <View className='flex-row justify-between items-center '>
                <View className='flex-row items-center gap-5 px-2'>
                    <Image source={pfp} className='rounded-full w-16 h-16' />
                    <View>
                        <Text className='text-[15px] font-medium '>Caller Name</Text>
                        <Text className='flex-row  text-sm font-light'><Image source={incommingCall} /> Date, Time</Text>
                    </View>
                </View>
                <View className='flex-row gap-5'>
                    <Image source={call} />
                    <Image source={videoCam} />
                </View>
            </View>
        </View>

    )
}

export default CallsTitle