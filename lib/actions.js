'use server';

import { redirect } from "next/navigation";
import { postMeal } from "./meals";
import { revalidatePath } from "next/cache";

//check here how to make use of 'use server'
  // since we rneder on the server, the data is already there and we do not need to collect and onSubmit the old fashioned way
// called ServerAction in nextjs terminology

const isInvalidText = (text) => { 
  return !text || text.trim() === ''; 
}

  
export const shareMealServerAction = async (formData) => { 
  
  const mealFromFormFields = {
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image')
  }


  //formvalidation cheaply done
  if (
    isInvalidText(mealFromFormFields.title) ||
    isInvalidText(mealFromFormFields.summary) ||
    isInvalidText(mealFromFormFields.instructions) ||
    isInvalidText(mealFromFormFields.creator_email) ||
    !mealFromFormFields.creator_email.includes('@') ||
    !mealFromFormFields.image || mealFromFormFields.image.size === 0
  ) {
    throw new Error('Invalid input.')
  } else { 
    await postMeal(mealFromFormFields)
    revalidatePath('/meals'); //  revalidatePath('/meals' , 'layout') the layout will be validated by the second argument, and layout will contain all nested pages
    redirect('/meals')
  }
}

