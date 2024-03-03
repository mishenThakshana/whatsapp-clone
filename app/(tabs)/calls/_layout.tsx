import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Calls",
          headerLargeTitle: true,
          headerShadowVisible: false,
          // headerStyle: {
          //   backgroundColor: Colors.background,
          // },
          headerTransparent: true,
          headerBlurEffect: "regular",
          headerSearchBarOptions: {
            placeholder: "Search",
          },
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Ionicons
                  name="call-outline"
                  size={24}
                  color={Colors.primary}
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});
