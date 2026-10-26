import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext(undefined);

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState("New York");
  const [storageReady, setStorageReady] = useState(false);

  const changeLocation = (nextLocation) => {
    setLocation(nextLocation.trim());
  };

  useEffect(() => {
    let mounted = true;
    AsyncStorage.getItem("location")
      .then((storedLocation) => {
        if (mounted && storedLocation?.trim()) setLocation(storedLocation);
      })
      .catch((error) => console.error("Unable to load saved location", error))
      .finally(() => {
        if (mounted) setStorageReady(true);
      });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    AsyncStorage.setItem("location", location).catch((error) =>
      console.error("Unable to save location", error)
    );
  }, [location, storageReady]);

  return (
    <LocationContext.Provider value={{ location, changeLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
