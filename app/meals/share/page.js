import MealsImagePicker from '@/app/components/meals/image-picker';
import styles from './page.module.css';

export default function ShareMealPage() {

  //check here how to make use of 'use server'
  // since we rneder on the server, the data is already there and we do not need to collect and onSubmit the old fashioned way
  // called ServerAction in nextjs terminology
  const shareMealServerAction =  async (formData) => { 
    'use server';
    const mealFromFormFields = {
      creator: formData.get('name'),
      creator_email: formData.get('email'),
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
    }

    console.log('formData', mealFromFormFields)
  }

  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={ shareMealServerAction }>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <MealsImagePicker name="image" label="Your image"></MealsImagePicker>
          <p className={styles.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}