import { StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.background,
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveBackgroundColor: Colors.background,
          tabBarActiveBackgroundColor: Colors.background,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
        }}
      >
        <Tabs.Screen
          name="updates"
          options={{
            title: "Updates",
            tabBarIcon: ({ size, color }) => {
              return <MaterialIcons name="update" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="calls"
          options={{
            title: "Calls",
            tabBarIcon: ({ size, color }) => {
              return <MaterialCommunityIcons name="phone-outline" size={size} color={color} />;
            },
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="communities"
          options={{
            title: "Communities",
            tabBarIcon: ({ size, color }) => {
              return <MaterialIcons name="people" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="chats"
          options={{
            title: "Chats",
            tabBarIcon: ({ size, color }) => {
              return <Ionicons name="chatbubbles" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ size, color }) => {
              return <Ionicons name="cog" size={size} color={color} />;
            },
            headerShown: false,
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};

export default Layout;

const styles = StyleSheet.create({});
