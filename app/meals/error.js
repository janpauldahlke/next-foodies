'use client';

const MealsErrorPage = ({ error }) => {
  return (
    <main className="error" >
      <h1>An error occured: {error.message} </h1>
      <p>Failed to fetch meals. Try again later ....</p>
    </main>
  );
}

export default MealsErrorPage;