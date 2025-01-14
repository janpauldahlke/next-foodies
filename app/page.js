import Link from "next/link";

import ImageSlideshow from "./components/images/image-slideshow";

import styles from "./page.module.css";

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow></ImageSlideshow>
        </div>
        <div>
          <div className={styles.hero}>
            <h1>NextLevel food for akquinet foodies</h1>
            <p>
              Taste and share food from all over the world or other fancy
              marketing text
            </p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Join the community</Link>
            <Link href="/meals">Explore meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
