import { View } from "react-native";
import userStore from "@/store/userStore";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const { isSignedIn } = userStore();
  const router = useRouter();
  const segments = useSegments();

  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  React.useEffect(() => {
    const inTabsGroup = segments[0] === "(tabs)";

    if (isSignedIn && !inTabsGroup) {
      router.replace("/chats");
    } else if (!isSignedIn && inTabsGroup) {
      router.replace("/");
    }
  }, [isSignedIn]);

  if (!loaded) {
    return <View />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="otp"
        options={{ headerTitle: "Enter Your Phone Number", headerBackVisible: false }}
      />
      <Stack.Screen
        name="verify/[phone]"
        options={{ headerTitle: "Verify Your Phone Number", headerBackTitle: "Edit number" }}
      />
    </Stack>
  );
};

const RootLayoutNav = () => {
  return <InitialLayout />;
};

export default RootLayoutNav;
