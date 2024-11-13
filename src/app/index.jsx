import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Link, useRouter } from 'expo-router';
import appleLogo from '../assets/images/Apple-white.png';
import google from '../assets/images/Google.png';
import facebook from '../assets/images/facebook.png';

const OnBoarding = () => {
  const router = useRouter();

  const toSignUpPage = () => {
    router.push('/Inbox');
  };

  return (
    <View className="bg-black h-full">
      <ImageBackground
        source={require('../assets/images/Ellipse.png')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'cover' }}
      >
        <View className="px-5">
          <Text className="text-white text-center text-lg tracking-wider font-bold">
            Quick Talk
          </Text>
          <Text className="text-white text-left text-7xl pt-16 mx-auto">
            Connect friends <Text className="font-semibold">easily & quickly</Text>
          </Text>
          <Text className="text-white text-left text-[16px] px-4 py-10 mx-auto">
            Our Chat app is the perfect way to stay connected with friends and family.
          </Text>

          <View className="flex-row justify-center items-center gap-3">
            <TouchableOpacity className="border border-white rounded-full p-2">
              <Image source={facebook} />
            </TouchableOpacity>
            <TouchableOpacity className="border border-white rounded-full p-2">
              <Image source={google} />
            </TouchableOpacity>
            <TouchableOpacity className="border border-white rounded-full p-2 px-[10px]">
              <Image source={appleLogo} />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center justify-center my-10">
            <View className="border-b border-[#cdd1d0] w-4/12" />
            <Text className="mx-2 text-white text-sm">OR</Text>
            <View className="border-b border-[#cdd1d0] w-4/12" />
          </View>

          <View className="mx-auto">
            <TouchableOpacity className="bg-white py-2 px-16 rounded-xl" onPress={toSignUpPage}>
              <Text className="text-sm">Sign Up With Email</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center items-center my-10">
            <Text className="text-[#b9c1be]">Existing Account? </Text>
            <Link href="/Screens/Login">
              <Text className="text-white font-medium">Login</Text>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnBoarding;
