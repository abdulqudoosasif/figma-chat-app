import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const AboutUser = () => {
    const [userData, setUserData] = useState({
        profile_picture: null,
        username: '',
        bio: '',
        status: '',
    });
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false); // State for toggling edit mode
    const [error, setError] = useState('');

    const handleImagePick = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            alert('Permission to access gallery is required!');
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!pickerResult.canceled) {
            setUserData((prev) => ({ ...prev, profile_picture: pickerResult.assets[0].uri }));
        }
    };

    const handleSave = async () => {
        try {
            setLoading(true);
            const token = await AsyncStorage.getItem('token');
            if (!token) {
                setError('No token found.');
                return;
            }

            const response = await fetch(
                "https://b53a-182-183-11-69.ngrok-free.app/api/profile/",
                {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                }
            );

            if (response.ok) {
                const data = await response.json();
                setUserData(data); // Update userData with server response if necessary
                setEditing(false); // Exit edit mode after saving
            } else {
                setError('Failed to save profile.');
            }
        } catch (err) {
            setError(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View className="flex-1 bg-white p-6">
            <View className="items-center">
                <TouchableOpacity onPress={handleImagePick}>
                    <Image
                        source={
                            userData.profile_picture
                                ? { uri: userData.profile_picture }
                                : require('../../assets/images/pfp.png')
                        }
                        className="w-24 h-24 rounded-full border"
                    />
                </TouchableOpacity>
                {editing && (
                    <Text className="text-gray-500 mt-2 text-sm">Tap to change picture</Text>
                )}
            </View>

            <View className="mt-6">
                {editing ? (
                    <>
                        <TextInput
                            placeholder="Username"
                            value={userData.username}
                            onChangeText={(text) =>
                                setUserData((prev) => ({ ...prev, username: text }))
                            }
                            className="border-b pb-2 mb-4"
                        />
                        <TextInput
                            placeholder="Bio"
                            value={userData.bio}
                            onChangeText={(text) =>
                                setUserData((prev) => ({ ...prev, bio: text }))
                            }
                            className="border-b pb-2 mb-4"
                        />
                        <TextInput
                            placeholder="Status"
                            value={userData.status}
                            onChangeText={(text) =>
                                setUserData((prev) => ({ ...prev, status: text }))
                            }
                            className="border-b pb-2 mb-4"
                        />
                    </>
                ) : (
                    <>
                        <Text className="text-xl font-semibold">{userData.username || 'Username'}</Text>
                        <Text className="text-gray-500">{userData.bio || 'Bio not provided'}</Text>
                        <Text className="text-gray-500">{userData.status || 'Status not available'}</Text>
                    </>
                )}
            </View>

            <View className="mt-6">
                {editing ? (
                    <TouchableOpacity
                        onPress={handleSave}
                        className="bg-green-500 py-3 rounded"
                    >
                        <Text className="text-white text-center">Save</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        onPress={() => setEditing(true)}
                        className="bg-blue-500 py-3 rounded"
                    >
                        <Text className="text-white text-center">Edit Profile</Text>
                    </TouchableOpacity>
                )}
            </View>

            {error ? (
                <Text className="text-red-500 text-center mt-4">{error}</Text>
            ) : null}
        </View>
    );
};

export default AboutUser;
