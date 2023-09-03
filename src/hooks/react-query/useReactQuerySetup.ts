import { setupReactQueryAutoRefetch } from "src/utils/app";
import { useAppStateChange } from "./useAppStateChange";

// setup react query auto refetch
setupReactQueryAutoRefetch();

export function useReactQuerySetup() {
  useAppStateChange();
}
