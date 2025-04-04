import HomeCatView from "@/components/HomeCatView";
import SearchBar from "@/components/SearchBar";
import { fetchBooks } from "@/services/api";
import useFetch from "@/services/useFetch";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

export default function Index() {

  const { 
    data: books,
    loading
  } = useFetch(fetchBooks)


  const Data = [
    { id: 1, title: "love" },
    { id: 2, title: "mecha" },
    { id: 3, title: "war" },
    { id: 4, title: "pride" },
    { id: 5, title: "art" },
  ]

  const limitedBooks = Array.isArray(books?.works) ? books?.works.slice(0, 15) : []


  return (
    <View className="flex-1 flex-col p-2">
      {/* Header */}
      <View className="flex flex-row h-[8rem] w-full p-3 pt-[5rem] justify-between items-center">
        <View className="flex flex-col">
          <Text className="font-bold text-lg">Hello</Text>
          <Text className="font-bold text-xl">Find Your Best Book</Text>
        </View>
        <View className="bg-black/80 w-[6rem] h-[3.5rem] rounded-xl flex justify-center items-center">
          <Text className="font-bold text-white">Login</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View className="flex w-full p-3 h-[8rem] mt-3 justify-center">
        <SearchBar onPress={() => router.push("/search")} placeholder='Search Books ...'/>
      </View>

      {/* Book Categories */}
      <View className="w-full min-h-fit">
        <Text className="font-bold text-lg">Start with:</Text>
        <FlatList
          data={Data}
          keyExtractor={(item) => item.id.toString()}
          numColumns={4}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 1,
            paddingRight: 5,
          }}
          renderItem={({ item, index }) => (
            <View className="flex flex-row p-2 justify-between items-center">
              <View
                className={`p-1 text-xl rounded-xl w-[4rem] flex justify-center items-center
                  ${index === 0 ? "bg-green-700/50" : "bg-gray-700/50"}`}
              >
                <Text className="text-white">{item.title}</Text>
              </View>
            </View>
          )}
        />
      </View>

      <View className="h-[4rem]">

      </View>

      <View className="pl-5">
        <Text className="text-xl uppercase font-bold">Books About Love</Text>
      </View>
      <View className="flex-1">
        {loading ? 
          (
            <View className="flex-1 h-full w-full justify-center">
              <ActivityIndicator 
                size="large"
                color="#000000"
                style={{ marginBottom: 20 }}
              />
              </View>
          )
        :(<FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="w-[7rem]" />}
          data={limitedBooks}
          contentContainerStyle={{
            paddingVertical: 10,
            paddingRight: 120, // Ensures the last item is fully visible
          }}
          removeClippedSubviews={false}
          renderItem={({ item, index }) => (
            <HomeCatView key={index} poster_path={item.cover_id} title={item.title} author="" work_key={item.key}/>  // author={item.author}
          )}
        />)}
</View>

    </View>
  )
}
