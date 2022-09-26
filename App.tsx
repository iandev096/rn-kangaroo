import "react-native-gesture-handler";
import { MainNav } from "src/features/navigation";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import FONT from "src/constants/FONT";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(FONT);

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MainNav />
    </GestureHandlerRootView>
  );
}
