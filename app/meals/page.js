import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "../components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

//this is the prefered way in nextjs for loading spinners, use <Suspense>
const Meals = async () => { 



  //NOTE:: when running npm run build and start
  //nextjs will cache all pages, also this one and the getMeals will only be used once on build, but when adding more meals in prod runtime, we never see them!
  //catchy
  const meals = await getMeals();

  return <MealsGrid meals={meals}></MealsGrid>
}

// note that we can be aync on toplevel, when working with server components
//We rewrote this, see werapper above for loading
const MealsPage = async () => {

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
        <Suspense fallback={<p className={styles.loading}>Fetching meals...</p>}>
          <Meals></Meals>
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
