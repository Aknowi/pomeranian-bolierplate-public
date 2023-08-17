import { useEffect, useState } from 'react';
import './styles.css';

export const DogAPI = () => {
  const [dogImageUrl, setDogImageUrl] = useState(null);

  const handleFetchDogImage = () => {
    asyncCall();
    // fetch('https://dog.ceo/api/breeds/image/random');
    // .then((response) => {
    //   return response.json();
    // })
    // .then((json) => {
    //   setDogImageUrl(json.message);
    // })
    // .catch((error) => console.log(error));
  };

  async function asyncCall() {
    try {
      const result = await fetch('https://dog.ceo/api/breeds/image/random');
      const jsonResult = await result.json();
      setDogImageUrl(jsonResult.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="dogapi-wrapper">
      <h3>Dog API - fetch a dog image</h3>
      <button onClick={() => handleFetchDogImage()} className="dogapi-button">
        Show me a dog
      </button>
      <img src={dogImageUrl} alt="" className="dogapi-image" />
    </div>
  );
};
