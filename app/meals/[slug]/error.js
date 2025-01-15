'use client';

const MealDetailErrorPage = ({ error, params }) => { 
  return (
    <main className="error" >
      <h1>An error occured : {error.message} </h1>
      <p>Failed to fetch meal : { params.slug}</p>
    </main>
  );
  
}