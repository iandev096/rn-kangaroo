import * as Location from "expo-location";
import { useCallback, useEffect, useState } from "react";

function useCurrentPosition(deps: any[] = [], onError: (msg: string) => any) {
  const [location, setLocation] = useState<Location.LocationObject>();

  const initLocation = useCallback(async () => {
    let isMounted = true;

    try {
      const hasServieEnabled = await Location.hasServicesEnabledAsync();
      if (!hasServieEnabled) {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted" && isMounted) {
          onError("Permission to access location was not granted");
          setLocation(undefined);
        }
      }

      const location = await Location.getCurrentPositionAsync();

      if (isMounted) {
        setLocation(location);
      }
    } catch (err: any) {
      onError(err?.message ?? '' )
    }

    return () => {
      isMounted = false;
    }
  }, [])

  useEffect(() => {
    initLocation();
  }, [initLocation, ...deps]);

  return { location, initLocation };
}

export default useCurrentPosition;
