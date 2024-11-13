import { View, Text,} from 'react-native'

const ProfilHeader = () => {
  return (
    <View className='bg-black flex-row justify-center items-center pt-16 pb-3 px-6'>
      <View>
        <Text className='text-white text-xl font-medium'> Profile</Text>
      </View>
    </View>
  )
}

export default ProfilHeader
