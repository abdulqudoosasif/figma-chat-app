import { View, Text } from 'react-native'
import { Slot, Stack } from "expo-router";
import React from 'react'
import "../../global.css";

const _layout = () => {
  return (
<Stack >
    <Stack.Screen name='index' options={{headerShown:false}}/>
    <Stack.Screen name='Screens' options={{headerShown:false}}/>
    <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
    <Stack.Screen name='Inbox'  options={{headerShown:false}}/>
    <Stack.Screen name='channelInbox'  options={{headerShown:false}}/>
</Stack>
  )
}

export default _layout  