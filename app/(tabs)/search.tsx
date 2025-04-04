import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '@/components/SearchBar'
import useFetch from '@/services/useFetch'
import { fetchBooks, searchBooks } from '@/services/api'
import SearchView from '@/components/SearchView'
import { Link } from 'expo-router'

const search = () => {

  const [searchQuery, setSearchQuery] = useState('')

  const { 
    data,
    loading,
    refetch,
    reset,
    error
  } = useFetch(() => 
    searchBooks({
      query: searchQuery
    }), false)

  const limitedBooks = data?.docs ? data?.docs.slice(0, 40) : []

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if(searchQuery.trim()) {
        await refetch();
      }else {
        reset()
      }
    }, 500)

    return () => clearTimeout(timeoutId)
  },[searchQuery])



    

  return (
    <View className='flex-1 flex-col p-2 pl-1'>
      <View className="flex-1">
        <FlatList 
          numColumns={2}
          data={limitedBooks}
          keyExtractor={(item) => item.key}
          columnWrapperStyle={{
            justifyContent: 'flex-start',
            gap: 75,
            paddingRight: 5,
            marginBottom: 10
          }}
          removeClippedSubviews={false}
          renderItem={({ item, index}) => (
            <SearchView poster_path={item.cover_i} title={item.title} author="" work_key={item.key}/>  // author={item.author}
          )}
          ListHeaderComponent={
            <>
              <View className="flex w-full p-3 h-[8rem] mt-3 justify-center">
                <SearchBar value={searchQuery} onChangeText={(text: string) => setSearchQuery(text)} placeholder='Search Books ...'/>
              </View>
              {
                loading && (
                  <View className="flex-1 h-full w-full justify-center">
                    <ActivityIndicator 
                      size="large"
                      color="#000000"
                      style={{ marginBottom: 20 }}
                    />
                  </View>
                )
              }

              {error && (
                <Text className="text-red-500 px-5 my-3">
                  Error: {error.message}
                </Text>
              )}


              {!loading && !error && searchQuery.trim() && limitedBooks?.length > 0 && (
                <Text className="text-xl text-black font-bold mb-3">
                Search Results for{' '}
                <Text className="text-accent">{searchQuery}</Text>
                </Text>
              )}

            </>
          }
          ListEmptyComponent={
            !loading && ! error ? (
              <View className="mt-10 px-5">
                <Text className="text-center text-black/70">
                  {searchQuery.trim() ? 'No books found' : 'Search for books'}
                </Text>
              </View>
            ): null
          }
        />
      </View>
    </View>
  )
}

export default search

const styles = StyleSheet.create({})