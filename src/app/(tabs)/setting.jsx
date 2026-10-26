import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import ToggleDegree from "../../components/ToggleDegree";
import { useLocation } from "../../context/LocationContext";

export default function SettingsScreen() {
  const { location, changeLocation } = useLocation();

  return (
    <ScrollView
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={styles.section}>
        <Text style={styles.heading}>Location</Text>
        <TextInput
          accessibilityLabel="Weather location"
          autoCapitalize="words"
          onChangeText={changeLocation}
          placeholder="Enter a city"
          style={styles.input}
          value={location}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Temperature</Text>
        <ToggleDegree />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { gap: 24, padding: 16 },
  section: { gap: 12 },
  heading: { fontSize: 20, fontWeight: "600" },
  input: {
    borderColor: "#999",
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});
