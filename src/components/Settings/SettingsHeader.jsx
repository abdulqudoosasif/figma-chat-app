import { View, Text,} from 'react-native'

const SettingsHeader = () => {
  return (
    <View className='bg-black flex-row justify-center items-center pt-16 pb-3 px-6'>
      <View>
        <Text className='text-white text-xl font-medium'>Settings</Text>
      </View>
    </View>
  )
}

export default SettingsHeader
