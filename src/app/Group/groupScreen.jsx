import { useRouter } from "expo-router";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from "react-native";

export default function CreateGroup() {
  const router =useRouter();
  const members = [
    { id: 1, name: "John Doe", role: "Group Admin", uri: "https://via.placeholder.com/150" },
    { id: 2, name: "Jane Smith", uri: "https://via.placeholder.com/150" },
    { id: 3, name: "Mike Brown", uri: "https://via.placeholder.com/150" },
    { id: 4, name: "Sarah Wilson", uri: "https://via.placeholder.com/150" },
  ];
 const handleBack=()=>{
  router.push("../")
 }
  return (
<SafeAreaView>
<ScrollView className="px-6 py-4">
      {/* Header */}
      <View className="flex-row items-center mb-4">
        <TouchableOpacity onPress={handleBack}>
          <Text className="text-xl font-bold">←</Text>
        </TouchableOpacity>
        <Text className="text-lg font-semibold ml-4">Create Group</Text>
      </View>

      {/* Group Description */}
      <Text className="text-gray-500 text-2xl mb-2">Group Description</Text>
      <Text className='text-[10vw] font-semibold'>
      Make Group for Team Work
      </Text>

      {/* Tags */}
      <View className="flex-row  gap-4 my-4">
        <Text className="bg-[#c0f0ec] px-4 py-2 rounded-full text-black">Group work</Text>
        <Text className="bg-[#c0f0ec] px-4 py-2 rounded-full text-black">Team relationship</Text>
      </View>

      <Text className="text-gray-500 text-sm mb-2">Group Admin</Text>
      <View className="flex-row items-center gap-4 mb-6">
        <Image
          source={{ uri:'https://static.vecteezy.com/system/resources/previews/029/771/887/non_2x/portrait-of-a-handsome-businessman-in-modern-office-asian-manager-looking-at-camera-and-smiling-confident-male-ceo-planning-and-managing-company-strategy-free-photo.jpeg' }}
          className="h-20 w-20 rounded-full"
        />
        <View>
          <Text className="text-lg font-semibold">{members[0].name}</Text>
          <Text className="text-sm text-gray-500">Group Admin</Text>
        </View>
      </View>

      {/* Invited Members */}
      <Text className="text-gray-500 text-sm mb-2">Invited Members</Text>
      <View className="flex-row flex-wrap gap-4">
        {members.slice(1).map((member) => (
          <View key={member.id} className="items-center mx-2">
            <Image
              source={{ uri: 'https://img.pikbest.com/photo/20241022/office-boy-in-photo_10993810.jpg!f305cw' }}
              className="h-20 w-20 rounded-full"
            />
            <TouchableOpacity className="absolute bottom-0 right-0 bg-white border-2 border-gray-200 rounded-full p-1">
              <Text className="text-xs">+</Text>
            </TouchableOpacity>
          </View>
        ))}
        {/* Add Member Placeholder */}
        <TouchableOpacity className="h-20 w-20 border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center">
          <Text className="text-gray-400 text-2xl">+</Text>
        </TouchableOpacity>
      </View>

      {/* Create Button */}
      <TouchableOpacity className="bg-teal-500 rounded-full py-3 mt-8">
        <Text className="text-white text-center text-lg font-semibold">Create</Text>
      </TouchableOpacity>
    </ScrollView>
</SafeAreaView>
  );
}
