import { Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '@/constants/icons'

const _layout = () => {

  const TabIcon = ({ focused, icon }: any) => {
    return (
      <View className={`flex w-full h-full justify-center items-center relative`}>
        {focused && (
          <View className="absolute top-0 w-12 border-t-2  border-black overflow-hidden" />
        )}
        <View className='h-[3.5rem] relative top-[1.3rem] w-full flex justify-center items-center'>
          <Image 
            source={icon}
            className={`size-6 ${focused ? '' : 'opacity-30'}`} 
          />
          </View>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
        },
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E5E5E5',
          height: 60,
          paddingLeft: 40 
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'home',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.home} />,
          tabBarButton: (props) => (
            <TouchableWithoutFeedback {...props}>
              <View style={{ flex: 1 }}>{props.children}</View>
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'explore',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.explore} />,
          tabBarButton: (props) => (
            <TouchableWithoutFeedback {...props}>
              <View style={{ flex: 1 }}>{props.children}</View>
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <Tabs.Screen
        name="save"
        options={{
          title: 'save',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.bookmark} />,
          tabBarButton: (props) => (
            <TouchableWithoutFeedback {...props}>
              <View style={{ flex: 1 }}>{props.children}</View>
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.profile} />,
          tabBarButton: (props) => (
            <TouchableWithoutFeedback {...props}>
              <View style={{ flex: 1 }}>{props.children}</View>
            </TouchableWithoutFeedback>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
