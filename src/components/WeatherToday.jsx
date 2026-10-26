import { ActivityIndicator, Text, View } from "react-native";
import { useDegree } from "../context/DegreeContext";
import { useLocation } from "../context/LocationContext";
import useFetch from "../hooks/useFetch";
import WeatherCard from "./WeatherCard";

const WeatherToday = () => {
  const { location } = useLocation();
  const { degree } = useDegree();
  const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    location
  )}&count=1&language=en&format=json`;
  const { data: places, isLoading: isGeocoding, error: geocodingError } =
    useFetch(geocodingUrl);
  const place = places?.results?.[0];
  const temperatureUnit = degree === "C" ? "celsius" : "fahrenheit";
  const forecastUrl = place
    ? `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=weather_code,temperature_2m,relative_humidity_2m,wind_speed_10m&temperature_unit=${temperatureUnit}&wind_speed_unit=kmh`
    : null;
  const { data, isLoading, error } = useFetch(forecastUrl);

  if (isGeocoding || (place && isLoading)) {
    return <ActivityIndicator accessibilityLabel="Loading weather" />;
  }
  if (geocodingError || error || !place) {
    return (
      <View>
        <Text>{geocodingError || error || "Location not found"}</Text>
      </View>
    );
  }

  return (
    <View>
      <WeatherCard data={data} location={place.name} />
    </View>
  );
};

export default WeatherToday;
