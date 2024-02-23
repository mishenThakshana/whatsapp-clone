import userStore from "@/store/userStore";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { View } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const { isSignedIn } = userStore();
  const router = useRouter();
  const segments = useSegments();

  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
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

    if (!inTabsGroup) {
      router.replace("/(tabs)/chats");
    } else if (!isSignedIn) {
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
