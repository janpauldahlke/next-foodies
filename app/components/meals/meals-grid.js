import MealItem from "./meal-item";
import styles from "./meals-grid.module.css";

const MealsGrid = ({ meals }) => {
  return (
    <ul className={styles.meals}>
      {(meals ?? []).map((meal, _i) => {
        return (
          <li key={meal.id ?? _i}>
            <MealItem {...meal}></MealItem>
          </li>
        );
      })}
    </ul>
  );
};

export default MealsGrid;
