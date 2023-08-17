// Zadanie 1:
// dodajmy diva na napis
// napisać useEffect'a oraz stworzyć Promise'a, który zostanie spełniony i wyświetli nam "I'm
// resolved :)"

import { useEffect, useState } from 'react';

// użyjmy useState do zapisania odpowiedzi z promisa.
export const UseEffectAndPromise = () => {
  // Cwiczenie pokazane przez Szymona + remaster zadania z dodaniem async await
  const [message, setMessage] = useState('');

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve("I'm resolved :)");
        } else {
          reject('Error');
        }
      }, 1000);
    });
  };

  async function asyncCall() {
    try {
      const result1 = await fetchData();
      setMessage(result1);
    } catch (error) {
      setMessage(error);
    } finally {
      console.log('Finish');
    }
  }

  useEffect(() => {
    // fetchData().then((res) => setMessage(res));
    asyncCall();
  }, []);

  // Ćwiczenie Symulowanie api

  const [user, setUser] = useState({ id: '', age: '', country: '' });
  const [error, setError] = useState(null);
  const loadUser = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve({ id: 1, name: 'John Doe' });
        } else {
          reject('Błąd servera');
        }
      }, 2000);
    });
  };

  const loadUserDetails = (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: userId, age: 30, country: 'Poland' });
      }, 2000);
    });
  };

  const loadAllUserDetails = () => {
    loadUser()
      .then((response) => {
        return response.id;
      })
      .then((id) => {
        return loadUserDetails(id);
      })
      .then((dataFromFunction) => {
        setUser(dataFromFunction);
        setError(null);
      })
      .catch((error) => {
        console.warn(error);
        setError(error);
      });
  };

  // async function loadAllUserDetails() {
  //   const userBasic = await loadUser();
  //   const userProper = await loadUserDetails(userBasic.id);
  //   setUser(userProper);
  // }

  console.log(user);
  return (
    <div>
      <p>{message}</p>
      <p>Id: {user.id}</p>
      <p>Age: {user.age}</p>
      <p>Country: {user.country}</p>
      <button onClick={() => loadAllUserDetails()}>Load user Details</button>
    </div>
  );
};
