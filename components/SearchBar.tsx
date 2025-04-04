import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface props {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({ onPress, placeholder, value, onChangeText }: props) => {
  return (
    <View className='flex-row items-center border border-black/50 rounded-lg px-5 py-4'>
      <TextInput 
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor='grey'
        className='flex-1 ml-2 text-black'
      />
      <Image 
        source={icons.search}
        className='size-8'
        resizeMode='contain'
      />
    </View>
  )
}

export default SearchBar