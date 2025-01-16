'use server';

import { redirect } from "next/navigation";
import { postMeal } from "./meals";

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
    isInvalidText(formData.title) ||
    isInvalidText(formData.summary) ||
    isInvalidText(formData.instructions) ||
    isInvalidText(formData.creator_email) ||
    !formData.creator_email.includes('@') ||
    !formData.image || formData.image.size === 0
  ) {
      throw new Error ('Invalid FormData')
  } else { 
    await postMeal(mealFromFormFields)
    redirect('/meals')
  }
}

