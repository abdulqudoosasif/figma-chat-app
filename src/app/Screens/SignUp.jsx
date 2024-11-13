import { View, Text, Image, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        if (name && email && password && confirmPassword) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }, [name, email, password, confirmPassword]);

    return (
        <View className='pt-10 px-5 h-full bg-white'>
            <View className='flex-col items-center'>
                <Text className='text-lg font-semibold mt-20'>Sign Up with Email</Text>
                <Text className='text-center text-[#797C7B] px-10 my-3'>
                    Get chatting with friends and family today by signing up for our chat app!
                </Text>
            </View>

            <View className='flex-col justify-start items-start mt-14'>
                <Text className='text-start mb-5 font-medium text-[#24786D]'>Your Name</Text>
                <TextInput
                    className='border-b-2 border-[#cdd1d0] mb-8 w-full'
                    value={name}
                    onChangeText={setName}
                />
                <Text className='text-start mb-5 font-medium text-[#24786D]'>Your Email</Text>
                <TextInput
                    className='border-b-2 border-[#cdd1d0] mb-8 w-full'
                    value={email}
                    onChangeText={setEmail}
                />
                <Text className='text-start mb-5 font-medium text-[#24786D]'>Password</Text>
                <TextInput
                    className='border-b-2 border-[#cdd1d0] mb-8 w-full'
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Text className='text-start mb-5 font-medium text-[#24786D]'>Confirm Password</Text>
                <TextInput
                    className='border-b-2 border-[#cdd1d0] w-full'
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            </View>
            <View className='top-56 justify-center items-center gap-2'>
                <TouchableOpacity
                    className={`py-2 px-36 rounded-xl ${isButtonEnabled ? 'bg-[#24786D]' : 'bg-[#F3F6F6]'
                        }`}
                    disabled={!isButtonEnabled}
                >
                    <Text className={`text-sm font-medium ${isButtonEnabled ? 'text-white' : 'text-[#797C7B]'}`}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignUp;
