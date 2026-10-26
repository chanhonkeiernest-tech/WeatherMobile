import { StyleSheet, Text, View } from "react-native";
import { useDegree } from "../context/DegreeContext";
import WeatherVisual from "./WeatherVisual";

const WeatherCardList = ({ data, location }) => {
  const { degree } = useDegree();
  const daily = data?.daily ?? {};
  const days = (daily.time ?? []).map((date, index) => ({
    date,
    code: daily.weather_code?.[index],
    high: daily.temperature_2m_max?.[index],
    humidity: daily.relative_humidity_2m_mean?.[index],
    wind: daily.wind_speed_10m_mean?.[index],
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{location} - 7-day forecast</Text>
      {days.map((day) => (
        <View key={day.date} style={styles.card}>
          <Text style={styles.date}>{day.date}</Text>
          <WeatherVisual code={day.code} />
          <Text style={styles.high}>
            High: {day.high ?? "N/A"} {degree === "C" ? "°C" : "°F"}
          </Text>
          <Text>Humidity: {day.humidity ?? "N/A"}%</Text>
          <Text>Wind: {day.wind ?? "N/A"} km/h</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 12 },
  heading: { fontSize: 22, fontWeight: "700", marginBottom: 4 },
  card: {
    alignItems: "center",
    backgroundColor: "#eaf4ff",
    borderRadius: 14,
    gap: 8,
    padding: 16,
  },
  date: { fontSize: 18, fontWeight: "600" },
  high: { fontSize: 20, fontWeight: "700" },
});

export default WeatherCardList;
