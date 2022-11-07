import * as Location from "expo-location";
import { useCallback, useEffect, useState } from "react";

function defaultOnError(msg: string){
  console.log(msg)
}

function useCurrentPosition(deps: any[] = [], onError = defaultOnError) {
  const [location, setLocation] = useState<Location.LocationObject>();

  const initLocation = useCallback(async () => {
    let isMounted = true;

    try {
      if (!(await Location.hasServicesEnabledAsync())) return onError('You have not enabled location services.');

      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== "granted" && isMounted) {
        onError("Permission to access location was not granted");
        setLocation(undefined);
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      if (isMounted) {
        setLocation(location);
      }
    } catch (err: any) {
      console.log(err)
      onError('Could not fetch current location');
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
