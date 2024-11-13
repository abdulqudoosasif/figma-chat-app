import { View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Stories from '../../components/Home/Stories'
import Chats from '../../components/Home/Chats'

const Home = () => {
    return (

        <View className='h-full bg-black  flex-col'>
            <Header />
            <Stories />
            <ScrollView showsVerticalScrollIndicator={false} className='bg-white rounded-t-3xl p-2 py-5'>
                <Chats />
            </ScrollView>
        </View>

    )
}

export default Home