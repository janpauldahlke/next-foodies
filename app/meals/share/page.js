import { shareMealServerAction } from '@/lib/actions'; // one could import server actions 'use server' in components that have the 'use client' directive on top
import MealsImagePicker from '@/app/components/meals/image-picker';

import styles from './page.module.css';
import ShareFormButton from './share-button';
//import { useActionState } from 'react';
//import { useFormState } from 'react-dom';

export default function ShareMealPage() {

  // only available on > react 18.3 
  //const [ state, formAction ] = useActionState(shareMealServerAction, { message: null} )
  //const [state, formAction] = useFormState(shareMealServerAction, { message: null });


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
          {/*state.message && <p className='error'>{ state.message }</p>*/}
          <p className={styles.actions}>
            <ShareFormButton />
          </p>
        </form>
      </main>
    </>
  );
}