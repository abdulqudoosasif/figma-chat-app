import { View, Text } from 'react-native'
import React from 'react'
import CallHeader from '../../components/Calls/CallHeader'
import CallsList from '../../components/Calls/CallsList'

const Calls = () => {
  return (
    <View>
      <CallHeader/>
      <CallsList/>
    </View>
  )
}

export default Calls