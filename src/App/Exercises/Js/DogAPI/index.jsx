import { useEffect, useState } from 'react';
import './styles.css';

const DOG_IMAGE_PLACEHOLDER =
  'https://meredith.nhcrafts.org/wp-content/uploads/dog-placeholder.jpg';

export const DogAPI = () => {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleFetchDogImage = () => {
    asyncCall();
    setIsButtonClicked(true);
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
      const { status, message } = await result.json();
      setDogImageUrl(message);

      if (status !== 200) {
        throw new Error('Cannot fetch dog image');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const dogPlacehodler = () => {
    setTimeout(() => {
      return DOG_IMAGE_PLACEHOLDER;
    }, 1000);
  };

  return (
    <div className="dogapi-wrapper">
      <h3>Dog API - fetch a dog image</h3>
      <button onClick={() => handleFetchDogImage()} className="dogapi-button">
        Show me a dog
      </button>
      {isButtonClicked && (
        <img
          src={dogImageUrl ? dogImageUrl : dogPlacehodler()}
          alt=""
          className="dogapi-image"
        />
      )}
    </div>
  );
};
