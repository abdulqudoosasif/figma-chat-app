import { View, Text, Image } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router';
import pfp from '../../assets/images/pfp.png';
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
                <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: 'bold' }}>Chat Name</Text>
              </View>
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', paddingRight: 10 }}>
                <TouchableOpacity onPress={() => alert('Call')}>
                  <MaterialCommunityIcons name="phone" size={24} color="#000" style={{ marginHorizontal: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Video Call')}>
                  <MaterialCommunityIcons name="video" size={24} color="#000" style={{ marginHorizontal: 10 }} />
                </TouchableOpacity>
              </View>
            ),
            headerStyle: { backgroundColor: '#f8f8f8' },
          }}
        />
        {/* <Stack.Screen name="ProductDetailScreen" options={{ headerShown: false }} /> */}
    </Stack>
  )
}

export default _layout