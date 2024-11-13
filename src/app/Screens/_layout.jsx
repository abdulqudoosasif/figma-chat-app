import { Slot, Stack } from 'expo-router'
import React from 'react'
const _layout = () => {
  return (
   
   <Stack>
    <Stack.Screen name='Login' options={{headerShown:false}}/>
    <Stack.Screen name='SignUp' options={{headerShown:false}}/>
   </Stack>
  )
}

export default _layout