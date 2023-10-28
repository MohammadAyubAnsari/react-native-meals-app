import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  // const categoryTitle = CATEGORIES.find(
  //   (category) => category.id === catId
  // ).title;
  // navigation.setOptions({
  //   title: categoryTitle,
  // });

  return <MealsList displayedMeals={displayedMeals} />;
}

export default MealsOverviewScreen;
