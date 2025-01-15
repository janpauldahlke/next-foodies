'use server';

import { redirect } from "next/dist/server/api-utils";
import { postMeal } from "./meals";

//check here how to make use of 'use server'
  // since we rneder on the server, the data is already there and we do not need to collect and onSubmit the old fashioned way
// called ServerAction in nextjs terminology
  
export const shareMealServerAction = async (formData) => { 
  
  const mealFromFormFields = {
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image')
  }

  await postMeal(mealFromFormFields)
}

