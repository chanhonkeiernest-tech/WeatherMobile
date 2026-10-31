// ============================================================================
// SECTION 1 - ROUTER  |  File: src/app/(tabs)/_layout.jsx  (the TABS layout)
// ============================================================================
// Every file in the (tabs) folder becomes a tab. The order of <Tabs.Screen>
// below is the order of the tabs. The `name` must match the file name
// without the extension:  name="index" -> index.jsx,  name="platform" -> platform.jsx


import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";



export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Today", // used for the header AND the tab label
          // tabBarIcon receives { focused, color, size } from the tab bar.
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "sunny" : "sunny-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="future"
        options={{
          title: "Future",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "calendar-clear-sharp" : "calendar-clear-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
