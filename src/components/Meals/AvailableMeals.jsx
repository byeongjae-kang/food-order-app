import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://yummi2-default-rtdb.firebaseio.com/meals.json`
      );
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const loadedData = [];

      for (const key in responseData) {
        loadedData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        });
      }
      setMeals(loadedData);
      setIsLoading(false);
    };

    fetchData().catch((err) => {
      console.log(err.message);
      setIsLoading(false);
      setErrorMessage(err.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealIsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section className={classes.errorMessage}>
        <p>{errorMessage}...</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
