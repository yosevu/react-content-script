import React, { useState, useEffect } from 'react';

const Joke = () => {
  const [joke, setJoke] = useState('');
  const fetchJoke = async () => {
    try {
      const response = await fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'your-api-key',
          'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setJoke(data[0].joke);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    fetchJoke();
  }, []);
  return (
    <div>
      <h2>Joke of the day:</h2>
      {joke && <p>{joke}</p>}
    </div>
  );
}

// post method
const joke = {
  setup: 'Why did the chicken cross the road?',
  punchline: 'To get to the other side!'
};
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': 'your-api-key',
    'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com',
  },
  body: JSON.stringify(joke)
};
fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

export default Joke;