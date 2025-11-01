import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF5700"
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerTitle: "Reddit",
          headerTintColor: "#FF5700",
          title: "Home",
          tabBarIcon: ({ color }) => (<Ionicons name="home-outline" size={24} color={color} />)
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          title: "Communities",
          tabBarIcon: ({ color }) => (<Ionicons name="people-outline" size={24} color={color} />)
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color }) => (<Ionicons name="create-outline" size={24} color={color} />)
        }}
      />
      <Tabs.Screen
        name='chat'
        options={{
          // headerTitle: "Chat",
          headerTintColor: "#FF5700",
          title: "Chat",
          tabBarIcon: ({ color }) => (<Ionicons name="chatbubbles-outline" size={24} color={color} />)
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ color }) => (<Ionicons name="mail-outline" size={24} color={color} />)
        }}
      />
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})