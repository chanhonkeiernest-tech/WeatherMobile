import { ScrollView, StyleSheet } from "react-native";
import WeatherFuture from "../../components/WeatherFuture";

export default function FutureScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
    >
      <WeatherFuture />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16 },
});
