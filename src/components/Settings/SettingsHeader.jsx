import { View, Text,} from 'react-native'

const SettingsHeader = () => {
  return (
  
     <View className='bg-black flex-row justify-center items-center pt-14 pb-3 px-6'>
     <View>
       <Text className='text-white text-xl font-medium'>Profile & Settings</Text>
     </View>
   </View>
  )
}

export default SettingsHeader
