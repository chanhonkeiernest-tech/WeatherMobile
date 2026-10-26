import { useDegree } from "../context/DegreeContext";
import { Switch, Text, View } from "react-native";

const ToggleDegree = () => {
  const { degree, toggleDegree } = useDegree();

  return (
    <View style={{ alignItems: "center", flexDirection: "row", gap: 12 }}>
      <Switch
        accessibilityLabel="Use Celsius"
        onValueChange={toggleDegree}
        value={degree === "C"}
      />
      <Text>Show temperatures in {degree === "C" ? "Celsius" : "Fahrenheit"}</Text>
    </View>
  );
};

export default ToggleDegree;