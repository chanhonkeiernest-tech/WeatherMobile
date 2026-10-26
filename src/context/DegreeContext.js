import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

const DegreeContext = createContext(undefined);

export const DegreeProvider = ({ children }) => {
  const [degree, setDegree] = useState("C");
  const [storageReady, setStorageReady] = useState(false);

  const toggleDegree = () => {
    setDegree((prevDegree) => (prevDegree === "C" ? "F" : "C"));
  };

  useEffect(() => {
    let mounted = true;
    AsyncStorage.getItem("degree")
      .then((storedDegree) => {
        if (mounted && (storedDegree === "C" || storedDegree === "F")) {
          setDegree(storedDegree);
        }
      })
      .catch((error) => console.error("Unable to load temperature unit", error))
      .finally(() => {
        if (mounted) setStorageReady(true);
      });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    AsyncStorage.setItem("degree", degree).catch((error) =>
      console.error("Unable to save temperature unit", error)
    );
  }, [degree, storageReady]);

  return (
    <DegreeContext.Provider value={{ degree, toggleDegree }}>
      {children}
    </DegreeContext.Provider>
  );
};

export const useDegree = () => {
  const context = useContext(DegreeContext);
  if (!context) {
    throw new Error("UseDegree must be used within a DegreeProvider");
  }
  return context;
};
