import { StyleSheet, Text, View } from "react-native";
import { useDegree } from "../context/DegreeContext";
import WeatherVisual from "./WeatherVisual";

const WeatherCard = ({ data, location }) => {
  const { degree } = useDegree();
  const current = data?.current ?? {};
  const temperature = current.temperature_2m;

  return (
    <View style={styles.card}>
      <Text style={styles.location}>{location}</Text>
      <WeatherVisual code={current.weather_code} />
      <Text style={styles.temperature}>
        {temperature ?? "N/A"} {degree === "C" ? "°C" : "°F"}
      </Text>
      <Text>Humidity: {current.relative_humidity_2m ?? "N/A"}%</Text>
      <Text>Wind: {current.wind_speed_10m ?? "N/A"} km/h</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "#eaf4ff",
    borderRadius: 16,
    gap: 12,
    padding: 20,
  },
  location: { fontSize: 24, fontWeight: "700" },
  temperature: { fontSize: 32, fontWeight: "700" },
});

export default WeatherCard;
