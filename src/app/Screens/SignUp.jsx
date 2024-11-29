import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const usernameRegex = /^[a-z0-9_\-@]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    useEffect(() => {
        const isValidForm = firstName && lastName && name && email && password && confirmPassword;
        setIsButtonEnabled(isValidForm);
    }, [firstName, lastName, name, email, password, confirmPassword]);

    const handleSignUp = async () => {
        if (!usernameRegex.test(name)) {
            Alert.alert('Error', 'Username can only contain lowercase letters, numbers, _, -, and @.');
            return;
        }

        if (!emailRegex.test(email)) {
            Alert.alert('Error', 'Please enter a valid email address.');
            return;
        }

        if (!passwordRegex.test(password)) {
            Alert.alert(
                'Error',
                'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, and a number.'
            );
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('https://b7e4-2407-d000-8-43ef-9880-55-a520-2c03.ngrok-free.app/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: name,
                    password:password,
                    password2: confirmPassword,
                    email:email,
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
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS === 'ios' ? 'padding' : "height"}
          keyboardVerticalOffset={10}
        >
            <ScrollView className='flex-1'>
            <View className="pt-10 px-5">
                <View className="flex-col items-center">
                    <Text className="text-lg font-semibold mt-20">Sign Up with Email</Text>
                    <Text className="text-center text-[#797C7B] px-10 my-3">
                        Get chatting with friends and family today by signing up for our chat app!
                    </Text>
                </View>

                <View className="flex-col justify-start items-start mt-14">
                    <Text className=' text-[15px] font-semibold mb-2'>
                        First Name
                    </Text>
                    <TextInput
                        className="border-b-2 border-[#cdd1d0] mb-7 w-full text-[16px]"
                        value={firstName}
                        onChangeText={setFirstName}
                        placeholder="First Name"
                    />
                        <Text className=' text-[15px] font-semibold mb-2'>
                        Last Name
                    </Text>
                    <TextInput
                        className="border-b-2 border-[#cdd1d0] mb-7 w-full text-[16px]"
                        value={lastName}
                        onChangeText={setLastName}
                        placeholder="Last Name"
                    />
                      <Text className=' text-[15px] font-semibold mb-2'>
                        User Name
                    </Text>
                    <TextInput
                        className="border-b-2 border-[#cdd1d0] mb-7 w-full text-[16px]"
                        value={name}
                        onChangeText={setName}
                        placeholder="Username (e.g., john_doe123)"
                    />
                      <Text className=' text-[15px] font-semibold mb-2'>
                        Email
                    </Text>
                    <TextInput
                        className="border-b-2 border-[#cdd1d0] mb-7 w-full text-[16px]"
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email Address"
                    />
                      <Text className=' text-[15px] font-semibold mb-2'>
                        Password
                    </Text>
                    <TextInput
                        className="border-b-2 border-[#cdd1d0] mb-7 w-full text-[16px] "
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                    />
                      <Text className=' text-[15px] font-semibold mb-2'>
                        Confirm Password
                    </Text>
                    <TextInput
                        className="border-b-2 border-[#cdd1d0] w-full"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholder="Confirm Password"
                    />
                </View>
                <View className="mt-[12vh] justify-center items-center gap-2">
                    <TouchableOpacity
                        className={`py-2 px-36 rounded-xl ${isButtonEnabled ? 'bg-[#24786D]' : 'bg-[#c3caca]'}`}
                        disabled={!isButtonEnabled || isLoading}
                        onPress={handleSignUp}
                    >
                        <Text className={`text-sm font-medium ${isButtonEnabled ? 'text-white' : 'text-[#797C7B]'}`}>
                            {isLoading ? 'Signing Up...' : 'Sign Up'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default SignUp;
