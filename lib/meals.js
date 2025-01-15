import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async () => {
  try {
    const mealsStatement = "SELECT * FROM meals";
    const dbQuery = db.prepare(mealsStatement);
    //simulate network delay to test loading component
    //comment out later
    //await new Promise((resolve) => setTimeout(resolve, 5000));

    // simulate error to test error component
    // comment out later
    // throw new Error('loading failed')


    return dbQuery.all();
  } catch (error) {
    console.error("Error fetching meals:", error);
    throw new Error("Failed to fetch meals");
  }
};

export const getMeal = (id) => {
  try {
    const mealStatement = "SELECT * FROM meals WHERE id = ?";
    const dbQuery = db.prepare(mealStatement);
    const meal = dbQuery.get(id);
    if (!meal) {
      throw new Error("Meal not found");
    }
    return meal;
  } catch (error) {
    console.error(`Error fetching meal with ID ${id}:`, error);
    throw new Error(`Failed to fetch meal with ID ${id}`);
  }
};

export const postMeal = (meal) => {
  try {
    const postMealStatement =
      "INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const dbQuery = db.prepare(postMealStatement);
    const {
      slug,
      title,
      image,
      summary,
      instructions,
      creator,
      creator_email,
    } = meal;
    return dbQuery.run(
      slug,
      title,
      image,
      summary,
      instructions,
      creator,
      creator_email
    );
  } catch (error) {
    console.error("Error inserting meal:", error);
    throw new Error("Failed to insert meal");
  }
};

export const deleteMealById = (id) => {
  try {
    const deleteMealStatement = "DELETE FROM meals WHERE id = ?";
    const dbQuery = db.prepare(deleteMealStatement);
    const result = dbQuery.run(id);
    if (result.changes === 0) {
      throw new Error("Meal not found or already deleted");
    }
    return result;
  } catch (error) {
    console.error(`Error deleting meal with ID ${id}:`, error);
    throw new Error(`Failed to delete meal with ID ${id}`);
  }
};

export const updateMeal = (meal) => {
  try {
    const updateMealStatement =
      "UPDATE meals SET title = ?, slug = ?, image = ?, summary = ?, instructions = ?, creator = ?, creator_email = ? WHERE id = ?";
    const dbQuery = db.prepare(updateMealStatement);
    const {
      id,
      title,
      slug,
      image,
      summary,
      instructions,
      creator,
      creator_email,
    } = meal;
    const result = dbQuery.run(
      title,
      slug,
      image,
      summary,
      instructions,
      creator,
      creator_email,
      id
    );
    if (result.changes === 0) {
      throw new Error("Meal not found or no changes made");
    }
    return result;
  } catch (error) {
    console.error(`Error updating meal with ID ${meal.id}:`, error);
    throw new Error(`Failed to update meal with ID ${meal.id}`);
  }
};
