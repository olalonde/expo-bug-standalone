import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  return (
    <RootLayoutWithSplash />
  );
}

function RootLayoutWithSplash() {
  const [fontsLoaded, error] = useFonts({
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  const loaded = fontsLoaded;

  return (
    <>
      {!loaded && <SplashScreen />}
      <RootLayoutNav />
    </>
  );
}

function RootLayoutNav() {
  // TODO: show splash screen while making sure auth token is valid and loading user info
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
