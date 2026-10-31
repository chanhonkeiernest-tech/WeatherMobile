// ============================================================================
// SECTION 1 - ROUTER  |  File: src/app/(tabs)/index.jsx  (tab 1: Menu)
// ============================================================================
// "index" is special: it is the screen shown at the folder's root URL ("/").

import { ScrollView, StyleSheet } from "react-native";
import WeatherToday from "../../components/WeatherToday";

export default function TodayScreen() {


  return (
    <ScrollView
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
    >
      <WeatherToday />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16 },
  list: { padding: 16, gap: 12 },
  header: { marginBottom: 4 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 14,
    borderWidth: 1,
    borderRadius: 14,
  },
  emoji: { fontSize: 32 },
  rowText: { flex: 1, gap: 2 },
  name: { fontSize: 17, fontWeight: "600" },
});
