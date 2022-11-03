import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

function useCurrentPosition(deps: any[] = []) {
  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;
    async function initialize() {
      const hasServieEnabled = await Location.hasServicesEnabledAsync();

      if (!hasServieEnabled) {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted" && isMounted) {
          setErrorMessage("Permission to access location was not granted");
          setLocation(undefined);
          return;
        }
      }

      const location = await Location.getCurrentPositionAsync();

      if (isMounted) {
        setLocation(location);
        setErrorMessage("");
      }
    }

    initialize();

    () => (isMounted = false);
  }, [...deps]);

  return { location, errorMessage };
}

export default useCurrentPosition;
