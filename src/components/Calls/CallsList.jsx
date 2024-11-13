import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

import CallsTitle from './CallsTitle'

const CallsList = () => {
    return (
        <View className='bg-black h-full flex-col'>
            <ScrollView showsVerticalScrollIndicator={false} className='bg-white mt-5 rounded-t-3xl px-2 py-5'>
                <Text className='text-[#2c2c2c] text-base font-semibold tracking-wide px-4 mb-4'>Recent</Text>
                <CallsTitle />
                <CallsTitle />
                <CallsTitle />
                <CallsTitle />
                <CallsTitle />
                <CallsTitle />
                <CallsTitle />
                <CallsTitle />
                <CallsTitle />
                <CallsTitle />
                <CallsTitle />
                <CallsTitle />
                <CallsTitle />
                <CallsTitle />
                <CallsTitle />
                <CallsTitle />
            </ScrollView>
        </View>
    )
}

export default CallsList