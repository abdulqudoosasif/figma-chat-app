import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import pfp from '../../assets/images/pfp.png';

const ContactList = () => {
  return (
    <View>
       <TouchableOpacity  className=" flex-1 flex-row gap-3 items-center  p-2 border-gray-300 border-b-[1px] ">
      <Image source={pfp} className='w-16 h-16 rounded-full'  />
      <View className="flex-col">
        <Text className="font-medium text-[15px] tracking-wide">Chat Name</Text>
      </View>
    </TouchableOpacity>
    </View>
  )
}

export default ContactList