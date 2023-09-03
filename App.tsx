import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FONT from "src/constants/FONT";
import { MainNav } from "src/features/navigation";
import { useReactQuerySetup } from "src/hooks/react-query/useReactQuerySetup";
import QueryClientProvider from "src/lib/queryClient";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(FONT);

  useReactQuerySetup();

  useEffect(
    function handleFontsLoading() {
      if (fontsLoaded) {
        SplashScreen.hideAsync()
          .then(() => console.log("FONTS LOADED"))
          .catch((e) => console.warn(e));
      }
    },
    [fontsLoaded]
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <MainNav />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
