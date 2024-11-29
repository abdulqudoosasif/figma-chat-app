import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image, Modal, TouchableWithoutFeedback } from 'react-native';

// Correctly import the image
import Product from '../../assets/images/Product1.jpeg';
import { router } from 'expo-router';

const Inbox = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!' },
    {
      id: 2,
      product: {
        image: Product,
        description: 'KAMIKAZI STRAWBERRY',
        price: 100,
      },
    },
  ]);

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeImageModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const handleBuyNow = (product) => {
       router.push('/Inbox/BuyNowScreen')
  };
  const handleCart = (product) => {
    router.push('/channelInbox/NewChannelScreen/AddtoCart')
};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Messages Area */}
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10 }}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={{
              alignSelf: 'flex-start',
              backgroundColor: '#e0e0e0',
              padding: 10,
              borderRadius: 10,
              maxWidth: '80%',
              marginBottom: 10,
            }}
          >
            {message.text ? (
              <Text>{message.text}</Text>
            ) : message.product ? (
              <View>
                <TouchableOpacity onPress={() => openImageModal(message.product.image)}>
                  <Image
                    source={message.product.image} 
                    style={{ width: 200, height: 240, borderRadius: 10 }}
                  />
                </TouchableOpacity>
                <Text style={{ marginTop: 8, color: '#000' }}>
                  {message.product.description}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                  <Text style={{ color: '#888' }}>${message.product.price}</Text>
              <View className='flex-row gap-2 mt-5'>
              <TouchableOpacity
                    onPress={handleCart}
                    style={{
                      paddingVertical: 6,
                      paddingHorizontal: 10,
                      backgroundColor: '#fff',
                      borderRadius: 10,
                    }}
                  >
                      <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Add To Cart</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleBuyNow}
                    style={{
                      paddingVertical: 6,
                      paddingHorizontal: 10,
                      backgroundColor: '#fff',
                      borderRadius: 10,
                    }}
                  >
                    <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Buy Now</Text>
                  </TouchableOpacity>
              </View>
                </View>
              </View>
            ) : null}
          </View>
        ))}
      </ScrollView>

      {/* Modal for Full-Screen Image */}
      <Modal visible={isModalVisible} transparent={true} animationType="fade">
        <TouchableWithoutFeedback onPress={closeImageModal}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {selectedImage && (
              <Image
                source={selectedImage}
                style={{
                  width: '100%',
                  resizeMode: 'contain', 
                }}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View
        style={{
          paddingVertical: 12,
          backgroundColor: '#ccc',
          marginHorizontal: 16,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Mute</Text>
      </View>
    </SafeAreaView>
  );
};

export default Inbox;
