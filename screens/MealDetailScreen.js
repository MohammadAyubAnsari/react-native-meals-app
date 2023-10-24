import { StyleSheet, Text, View } from "react-native";

export default function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text style={styles.text}>This is the Meal Detail Screen({mealId})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
