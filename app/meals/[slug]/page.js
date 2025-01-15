import Image from 'next/image';

import styles from './page.module.css';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

const MealDetailsPage = ({ params }) => {
  const meal = getMeal(params.slug) // the params obj will have a [slug] param, see dynamic route creation

  if (!meal) {
    //will ensure redirect to closest not found or error page
    //comes within nextjs
    notFound()
  }

  const {
    title,
    image,
    summary,
    instructions,
    creator,
    creator_email,
  } = meal

  return (
    <>
      <header className={ styles.header}>
        <div className={styles.image}>
          <Image src={image} alt={ title}  fill/>
        </div>
        <div className={styles.headerText}>
          <h1>{ title }</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${creator_email}`}>{ creator}</a>
          </p>
          <p className={summary}>
            summary
          </p>
        </div>
      </header>
      <main>
        <p className={styles.instructions} dangerouslySetInnerHTML={{ __html: instructions.replace(/\n/g, '<br />')}}></p>
      </main>
    </>
  )
};

export default MealDetailsPage;