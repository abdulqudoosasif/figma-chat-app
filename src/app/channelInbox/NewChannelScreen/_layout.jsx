import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    
      <Stack >
        <Stack.Screen name='CreateChannel'
        options={{
          title:'New Channel',
        }}/>
         <Stack.Screen name='AddtoCart'
        options={{
          title:'Cart',
        }}/>
      </Stack>

  )
}

export default _layout