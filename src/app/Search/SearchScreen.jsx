import { View, Text } from 'react-native'
import React from 'react'
import SearchHeader from '../../components/Search/SearchHeader'
import Contacts from '../../components/Search/Contacts'

const SearchScreen = () => {
  return (
    <View>
  <SearchHeader/>
  <Contacts/>
    </View>
  )
}

export default SearchScreen