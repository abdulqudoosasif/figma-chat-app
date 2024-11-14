import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

const BuyNowScreen = ({ route }) => {


  return (
    <ScrollView className="bg-white px-4">
      {/* Product Image and Details */}
      <View className="flex-row gap-4  items-center">
        <View className="mb-2">
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/3e6a/9aa2/f5a5413324bee79dc6b09a321b86d207?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sa6mjB~A78BTmHC1cOx3e4tVfZ~35k29HLKP8-~Tdppej98rmWUwVXY1V5lXKw8egEfDyLN3JDod3yc6nl4tPCVIIFhTYnLf3DWllL-op9bRl-6BlnBiDci0y8-Ks2k16LCJi8mti9WJDiZU1Z6jDeciDhJGmkl-EKa5Is6wiR7jzkH9f26LBlIBuOGtMA29zM3G8Z0Hf2iu4eVE4Xmfd-S2ckEiDOvC5ckJqprheMVAMM0K7cO6wuGASFLd0iD3GH8Ryf2QRCVwLA7g6ve6i9RgNAoro~KAK1Dk2sY-L-rrLvPxvFNbvZL02IrK-Uz8bzucVOb0gOcYJobdvxQ8GQ__",
            }} 
            style={{ width: 200, height: 200, resizeMode: "contain" }}
          />
          <Text className="text-lg font-semibold my-2">KAMIKAZI STRAWBERRY</Text>
        </View>
        <View className="flex-col justify-between items-center">
          <View className=" items-center mb-14">
            <Text className="text-xl font-medium mt-2">Price : $125/-</Text>
            <Text className="text-sm text-gray-500 mb-3">
              Minimum Order $10,000/-
            </Text>
          </View>
          {/* Order Button */}
          <TouchableOpacity className="bg-teal-500 py-2 px-4 rounded-full my-2">
            <Text className="text-white font-bold">Order Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* How To Purchase Section */}
   <View className='items-center'>
   <Text className="text-xl font-medium mt-5">How To Purchase</Text>
      <View className="flex-row  gap-3 my-3">
        <TouchableOpacity className="bg-teal-500 py-2 px-7 rounded-full">
          <Text className="text-white text-[16px]">Intown</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#EDF7F6] py-2 px-11 rounded-full">
          <Text className="text-black ">OT</Text>
        </TouchableOpacity>
      </View>
   </View>

   <View className='items-center mt-5 mb-3'>
   <TouchableOpacity className="bg-teal-500 py-2 px-16 rounded-full my-2 items-center">
        <Text className="text-white font-bold">Send a Verification Video</Text>
      </TouchableOpacity>
      <Text className="text-xs text-gray-500 mt-1">
          $10,000 in hand or Direct written on paper
        </Text>
   </View>

  <View className='items-center gap-4'> 
  <TouchableOpacity className="bg-[#EDF7F6] py-2 px-4  rounded-full my-2">
        <Text className="text-black ">Pay Now</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-teal-500 py-2 px-4 rounded-full my-2">
        <Text className="text-white font-medium">Order Received</Text>
      </TouchableOpacity>
  </View>

    <View className='items-center mt-3 mb-5'>
    <TouchableOpacity className="bg-[#EDF7F6] py-2 px-11 rounded-full my-2 items-center">
        <Text className="text-teal-500 font-bold">Shipping Channel link</Text>
      </TouchableOpacity>
        <Text className="text-xs text-gray-500 mt-1 text-center">
          Your payment has been received; this channel will give you updates
          regarding your delivery
        </Text>
    </View>

      <TouchableOpacity className="bg-[#F4F6F6] py-3 px-4 rounded-full my-4 w-full items-center">
        <Text className="font-medium">SEND VIDEO TO PROCEED FURTHER</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BuyNowScreen;
