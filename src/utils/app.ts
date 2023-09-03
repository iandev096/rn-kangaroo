import NetInfo from "@react-native-community/netinfo";
import { AppStateStatus, Platform } from "react-native";
import { focusManager, onlineManager } from "react-query";

export function setupReactQueryAutoRefetch() {
  onlineManager.setEventListener((setOnline) => {
    return NetInfo.addEventListener((state) => {
      setOnline(!!state.isConnected);
    });
  });
}

export function handleAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
}
