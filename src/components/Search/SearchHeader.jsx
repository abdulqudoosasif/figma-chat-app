import { View, Text } from 'react-native'
import React from 'react'

const SearchHeader = () => {
  return (
    <View className='bg-black flex-row justify-center items-center pt-14 pb-3 px-6'>
    <View>
      <Text className='text-white text-xl font-medium'>Search</Text>
    </View>
  </View>
  )
}

export default SearchHeader