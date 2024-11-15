import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        // Enable button only when all fields are filled
        if (firstName && lastName && name && email && password && confirmPassword) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }, [firstName, lastName, name, email, password, confirmPassword]);

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match.');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: name,
                    password: password,
                    password2: confirmPassword,
                    email: email,
                    first_name: firstName,
                    last_name: lastName,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                Alert.alert('Success', 'Account created successfully.');
                console.log(data);
            } else {
                const error = await response.json();
                Alert.alert('Error', error.message || 'Something went wrong.');
            }
        } catch (err) {
            console.error(err);
            Alert.alert('Error', 'Failed to connect to the server.');
        }
    };

    return (
        <View className='pt-10 px-5 h-full bg-white'>
            <View className='flex-col items-center'>
                <Text className='text-lg font-semibold mt-20'>Sign Up with Email</Text>
                <Text className='text-center text-[#797C7B] px-10 my-3'>
                    Get chatting with friends and family today by signing up for our chat app!
                </Text>
            </View>

            <View className='flex-col justify-start items-start mt-14'>
                <Text className='text-start mb-5 font-medium text-[#24786D]'>First Name</Text>
                <TextInput
                    className='border-b-2 border-[#cdd1d0] mb-8 w-full'
                    value={firstName}
                    onChangeText={setFirstName}
                />
                <Text className='text-start mb-5 font-medium text-[#24786D]'>Last Name</Text>
                <TextInput
                    className='border-b-2 border-[#cdd1d0] mb-8 w-full'
                    value={lastName}
                    onChangeText={setLastName}
                />
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
                    onPress={handleSignUp}
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
