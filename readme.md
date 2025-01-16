### learning next

* is kicked off with `npx create-next-app`
* run `npm install` followed by `npm run dev`

###
i've created this codesandbox here
[Link to sandbox](https://codesandbox.io/p/github/janpauldahlke/next-foodies) where you can either hands on yourself, or just visit

#### tech stack one
>* TypeScript
>* React 19
>* Next 15
>* Turborepo
>* Vite
>* Storybook
>* Tailwind
>* RadixUI
>* Hookform
>* Redis


# beware the difference of prod static and runtime

```jsx
const Meals = async () => { 
  //NOTE: when running npm run build and start
  //nextjs will cache all pages, also this one and the getMeals will only be used once on build, 
  // but whe adding more meals in prod runtime, we never see them!
  //catchy
  const meals = await getMeals();

  return <MealsGrid meals={meals}></MealsGrid>
}

```
 > we need to add this `import { revalidatePath } from "next/cache";`
 > here in our server action to tell next to invalidate the cache
 ```js
 else { 
    await postMeal(mealFromFormFields)
    revalidatePath('/meals');
    redirect('/meals')
  }
 ```
 >like so

 > also `prod` has no access to `/public/images` like `/dev`
 > with the result that we can't see uploaded images
 > we would need to use a s3 bucket or else
 > continue reading here : [static and remote images](https://nextjs.org/docs/app/building-your-application/optimizing/images#remote-images)

 #### metadata && seo optimization
 > docs [for metadta ](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
 > can we provided to any page by using `export function metadata {}` like we already know
 > to dynamically generate it we need to provide `export async function generateMetadata` the naming is important here