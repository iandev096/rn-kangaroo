import "react-native-gesture-handler";
import AppEntry from "src/features/navigation";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import FONT from "src/constants/FONT";
import { useEffect } from "react";

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

  return <AppEntry />;
}
