import { View, Text, Image } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router';
import pfp from '../../assets/images/pfpch.png';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const _layout = () => {
    const router = useRouter();
  return (
    <Stack>
         <Stack.Screen
         name='index'
          options={{
            headerTitle: '',
            headerLeft: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => router.back()}>
                  <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>
                <Image source={pfp} style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }} />
                <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: 'bold' }}>Channel Name</Text>
              </View>
            )
           
          }}
        />
    </Stack>
  )
}

export default _layout