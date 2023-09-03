import { useEffect } from "react";
import { AppState } from "react-native";
import { handleAppStateChange } from "src/utils/app";

export function useAppStateChange() {
  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => subscription.remove();
  }, []);
}
