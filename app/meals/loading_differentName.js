import styles from './loading.module.css'

// filename is convention
// should be loading.js
// one way to handle loading states

const MealsLoadingPage = () => { 
  return (
    <p className={styles.loading}>Fetching meals...</p>
  )
}

export default MealsLoadingPage;