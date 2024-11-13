import { View, Text, Image, TextInput } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import appleLogo from '../../assets/images/Apple-black.png';
import google from '../../assets/images/Google.png';
import facebook from '../../assets/images/facebook.png';
import { Link, router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

   useEffect(() => {
     setIsButtonEnabled(!!username && !!password);
   }, [username, password]);

  const handleLogin = async () => {
 
    // try {
    //   const response = await fetch('https://e187-2407-d000-8-6530-f92a-27ec-3334-8c07.ngrok-free.app/api/token/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ username, password }),
    //   });

    //   if (response.status === 200) {
    //     const data = await response.json();
    //     // console.log('API Response:', data); // Log the response data

    //     if (data.access) {
    //       await AsyncStorage.setItem('token', data.access);
    //       // await AsyncStorage.setItem('refreshToken', data.refresh);
    //       setError(''); // Clear previous errors
    //       // console.log('Token saved:', data.access); // Log token saving
    //       // console.log('Token saved:', data.refresh); // Log token saving
          router.push('/Home'); 
    //     } else {
    //       setError('Unexpected response from the server.');
    //       console.error('Missing access in response:', data); 
    //     }
    //   } else {
    //     const errorData = await response.json();
    //     console.error('Error response:', errorData);
    //     setError(errorData.detail || 'Invalid username or password');
    //   }
    // } catch (err) {
    //   console.error('Fetch error:', err); 
    //   setError('An error occurred. Please try again.');
    // }
  };


  return (
    <View className="pt-16 px-5 h-full bg-white">
      <View className="flex-col items-center">
        <Text className="text-lg font-semibold mt-20">Login to Quick Talk</Text>
        <Text className="text-center text-[#797C7B] px-16 my-3">
          Welcome Back! Sign in using your social account or email to continue
        </Text>
        <View className="flex-row justify-center items-center gap-3">
          <Link href=""><View className="border border-black rounded-full p-2"><Image source={facebook} /></View></Link>
          <Link href=""><View className="border border-black rounded-full p-2"><Image source={google} /></View></Link>
          <Link href=""><View className="border border-black rounded-full p-2 px-[10px]"><Image source={appleLogo} /></View></Link>
        </View>
      </View>
      <View className="flex-row items-center justify-center my-10">
        <View className="border-b border-[#cdd1d0] w-4/12" />
        <Text className="mx-2 text-[#797c7b] text-sm">OR</Text>
        <View className="border-b border-[#cdd1d0] w-4/12" />
      </View>
      <View className="flex-col justify-start items-start">
        <Text className="text-start mb-5 font-medium text-[#24786D]">Username</Text>
        <TextInput
          className="border-b-2 border-[#cdd1d0] mb-8 w-full"
          value={username}
          onChangeText={setUsername}
        />
        <Text className="text-start mb-5 font-medium text-[#24786D]">Password</Text>
        <TextInput
          className="border-b-2 border-[#cdd1d0] w-full"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      {error ? <Text className="text-red-500 text-sm mt-2">{error}</Text> : null}
      <View className="top-64 justify-center items-center gap-2">
        <TouchableOpacity
          onPress={handleLogin}
          className={`py-2 px-36 rounded-xl ${isButtonEnabled ? 'bg-[#24786D]' : 'bg-[#F3F6F6]'}`}
          disabled={!isButtonEnabled}
        >
          <Text className={`text-sm font-medium ${isButtonEnabled ? 'text-white' : 'text-[#797C7B]'}`}>
            Log in
          </Text>
        </TouchableOpacity>
        <Link href="" className="text-[#24786D] font-medium">Forgot Password?</Link>
      </View>
    </View>
  );
};

export default Login;
