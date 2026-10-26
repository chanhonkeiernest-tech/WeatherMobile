import { ScrollView, StyleSheet } from "react-native";
import WeatherToday from "../../components/WeatherToday";

export default function HooksScreen() {
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
});
