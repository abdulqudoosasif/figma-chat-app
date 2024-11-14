import React from 'react';
import { View, TextInput, Image, ScrollView } from 'react-native';
import search from '../../assets/images/search.png';
import ContactList from './ContactList';

const Contacts = () => {
  return (
    <View className="bg-black h-full">
      <View className="flex-row gap-5 items-center my-3 px-2">
        <Image className="w-6 h-6" source={search} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="gray"
          className="border-gray-300 border-[1px] text-white py-3 w-[85vw] rounded-full px-2"
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="bg-white rounded-t-3xl p-2 py-5">
        {[...Array(15)].map((_, index) => (
          <ContactList key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Contacts;
