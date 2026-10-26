import { Image, StyleSheet, Text, View } from "react-native";
import cloudImage from "../assets/cloud.png";
import rainImage from "../assets/rain.png";
import snowduststormImage from "../assets/snoworduststorm.png";
import fogImage from "../assets/fog.png";
import snowImage from "../assets/snowing.png";
import stormImage from "../assets/thunderstorm.png";
import clearImage from "../assets/clear.png";
import unknownImage from "../assets/unknown.png";

const WeatherVisual = ({ code }) => {
  let image = unknownImage;
  let description = "Unknown";

  if (code === 0) {
    image = clearImage;
    description = "Clear sky";
  } else if (code >= 1 && code <= 3) {
    image = cloudImage;
    description = "Cloudy";
  } else if (code === 45 || code === 48) {
    image = fogImage;
    description = "Fog";
  } else if (code >= 51 && code <= 67) {
    image = rainImage;
    description = "Rain";
  } else if (code >= 71 && code <= 77) {
    image = snowImage;
    description = "Snow";
  } else if (code >= 80 && code <= 82) {
    image = rainImage;
    description = "Rain showers";
  } else if (code >= 85 && code <= 86) {
    image = snowImage;
    description = "Snow showers";
  } else if (code >= 95) {
    image = stormImage;
    description = "Thunderstorm";
  } else if (code >= 30 && code <= 35) {
    image = snowduststormImage;
    description = "Dust storm";
  }

  return (
    <View style={styles.container}>
      <Image source={image} accessibilityLabel={description} style={styles.image} />
      <Text style={styles.label}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", gap: 8 },
  image: { height: 88, resizeMode: "contain", width: 88 },
  label: { fontSize: 16, fontWeight: "600" },
});

export default WeatherVisual;
