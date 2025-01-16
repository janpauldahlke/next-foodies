'use client';

const Error = ({ error }) => { 
  return (
    <main className="error">
      <h1>Something went wrong on..</h1>
      <p>{ error }</p>
    </main>
  );
}

export default Error;