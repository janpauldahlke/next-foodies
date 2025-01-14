import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "../components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

const MealsPage = () => {
  // Fetching meals data from the server
  const meals = getMeals();

  // For debugging, remove the log once done
  console.log("meals");

  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Cook it yourself, easy and fun!</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your fav recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals}></MealsGrid>
      </main>
    </>
  );
};

export default MealsPage;
