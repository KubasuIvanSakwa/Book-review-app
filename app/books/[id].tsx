import { icons } from "@/constants/icons";
import { fetchAuthors } from "@/services/api";
import useFetch from "@/services/useFetch";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const BookDetails = () => {
  const { id, title, author, cover_id } = useLocalSearchParams()

  const {
    data,
    loading,
    error,
  } = useFetch(() => fetchAuthors(
    id
  ))
  
  return (
    <ScrollView className="flex-1 bg-red-40">
      <View className="flex  flex-row w-full p-3 mt-[3rem] items-center justify-between">
        
      <TouchableOpacity
        onPress={router.back}
      >
        <Image 
            source={icons.back}
            resizeMode="contain"
            style={{ width: 40, height: 30}}
            className="opacity-70"
        />
      </TouchableOpacity>
        <Text className="text-xl font-bold">Book Detail</Text>
        <Image 
          source={icons.bookmark}
          resizeMode="contain"
          style={{ width: 40, height: 30}}
          className="opacity-70"
        />
      </View>

      <View className="mt-2 min-h-fit flex justify-center items-center">
       { <Image 
          resizeMode="contain"
          className="w-[20rem] h-[25rem]"
          source={{
             uri: cover_id ? 
             `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg`
             :"https://placehold.co/600x400"
          }}
        />}
      </View>
      <View className="flex items-center mt-3">
        <Text numberOfLines={2} className="text-2xl font-bold capitalize opacity-60">{title}</Text>
        <Text numberOfLines={2} className="text-2xl font-bold capitalize opacity-40">author: {author}</Text>
      </View>
      
      <View
        className="flex justify-center items-center mt-2"
      >
        <View className="flex flex-row justify-around border border-black/10 p-2 w-[20rem] h-[5rem]">
          <View className="h-full flex justify-center flex-col gap-2">
            <Text className="text-lg capitalize w-full">release</Text>
            <Text className="w-full font-bold text-xl">
              {data?.first_publish_date?.split(',')[1] || 'N/A'}
            </Text>
          </View>
          <View className="h-full flex justify-center flex-col gap-2">
            <Text className="text-xl capitalize w-full">
              revision
            </Text>
            <Text className="w-full font-bold text-xl">
              {data?.latest_revision || 'N/A'}
            </Text>
          </View>
        </View>
      </View>

      <View className="p-3">
        <Text className="text-2xl font-bold mt-3 opacity-40">Description</Text>
        <Text className="text-lg mt-2">{data?.description.value || data?.description || 'N/A'}</Text>
      </View>
    </ScrollView>
  )
}

export default BookDetails;
