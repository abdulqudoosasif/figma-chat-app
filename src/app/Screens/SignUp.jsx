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

    // Regular expressions for validation
    const usernameRegex = /^[a-z0-9_\-@]+$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; 

    useEffect(() => {
        if (
            firstName &&
            lastName
        ) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
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

        try {
            const response = await fetch('https://a1a0-2407-d000-8-6df2-4c57-571-51ef-11d2.ngrok-free.app/api/register/', {
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
        <View className="pt-10 px-5">
            <View className="flex-col items-center">
                <Text className="text-lg font-semibold mt-20">Sign Up with Email</Text>
                <Text className="text-center text-[#797C7B] px-10 my-3">
                    Get chatting with friends and family today by signing up for our chat app!
                </Text>
            </View>

            <View className="flex-col justify-start items-start mt-14">
                <Text className="text-start font-medium text-[#24786D]">First Name</Text>
                <TextInput
                    className="border-b-2 border-[#cdd1d0] mb-8 w-full"
                    value={firstName}
                    onChangeText={setFirstName}
                />
                <Text className="text-start font-medium text-[#24786D]">Last Name</Text>
                <TextInput
                    className="border-b-2 border-[#cdd1d0] mb-8 w-full"
                    value={lastName}
                    onChangeText={setLastName}
                />
                <Text className="text-start font-medium text-[#24786D]">Username</Text>
                <TextInput
                    className="border-b-2 border-[#cdd1d0] mb-8 w-full"
                    value={name}
                    onChangeText={setName}
                    placeholder="e.g., john_doe123"
                />
                <Text className="text-start font-medium text-[#24786D]">Your Email</Text>
                <TextInput
                    className="border-b-2 border-[#cdd1d0] mb-8 w-full"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="e.g., example@mail.com"
                />
                <Text className="text-start font-medium text-[#24786D]">Password</Text>
                <TextInput
                    className="border-b-2 border-[#cdd1d0] mb-8 w-full"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    placeholder="At least 8 characters"
                />
                <Text className="text-start font-medium text-[#24786D]">Confirm Password</Text>
                <TextInput
                    className="border-b-2 border-[#cdd1d0] w-full"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            </View>
            <View className="top-56 justify-center items-center gap-2">
                <TouchableOpacity
                    className={`py-2 px-36 rounded-xl ${isButtonEnabled ? 'bg-[#24786D]' : 'bg-[#c3caca]'
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