import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { DegreeProvider } from "../context/DegreeContext";
import { LocationProvider } from "../context/LocationContext";

export default function RootLayout() {
  return (
    <DegreeProvider>
      <LocationProvider>
        <StatusBar style="auto" />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </LocationProvider>
    </DegreeProvider>
  );
}
