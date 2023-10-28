import { useContext } from "react";
import MealsList from "../components/MealList/MealsList";
import { FavoruitesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

function FavouriteScreen() {
  const favouriteMealsCtx = useContext(FavoruitesContext);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsCtx.ids.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No favourite meal</Text>
      </View>
    );
  }

  return <MealsList displayedMeals={favouriteMeals} />;
}

export default FavouriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
