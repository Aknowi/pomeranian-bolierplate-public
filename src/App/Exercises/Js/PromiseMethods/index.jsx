import './styles.css';

export const PromiseMethods = () => {
  const fetchDataFast = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 1, time: 300 });
      }, 300)
    );
  const fetchDataLong = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 2, time: 700 });
      }, 700)
    );
  const fetchDataError = () =>
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error('Błąd pobierania danych'));
      }, 500)
    );

  const resultLogger = (values) => {
    console.log(values);
  };
  const errorLogger = (error) => console.log(error);

  const line = () => console.log('-----------------------------------------');

  return (
    <div className="promise-methods-wrapper">
      <h1>Promise Methods Traning</h1>
      {/* // Promise.all dla fetchDataFast i fetchDataLong */}
      <button
        onClick={() => {
          Promise.all([fetchDataFast(), fetchDataLong()])
            .then((values) => {
              console.log(values);
            })
            .catch((error) => console.log(error))
            .finally(line());
        }}
      >
        Promise.all without error
      </button>
      {/* // Promise.all dla fetchDataFast, fetchDataLong, oraz fetchDataError */}
      <button
        onClick={() => {
          Promise.all([fetchDataFast(), fetchDataError()])
            .then(resultLogger)
            .catch(errorLogger)
            .finally(line());
        }}
      >
        Promise.all with error
      </button>
      {/* // Promise.allSettled dla fetchDataFast, fetchDataLong */}
      <button
        onClick={() => {
          Promise.allSettled([fetchDataFast(), fetchDataLong()])
            .then((results) =>
              results.forEach((result) =>
                console.log(result.value, result.status)
              )
            )
            .catch((error) => console.log(error))
            .finally(line());
        }}
      >
        Promise.allSettled without error
      </button>
      {/*   // Promise.allSettled dla fetchDataFast, fetchDataLong, oraz fetchDataError*/}
      <button
        onClick={() => {
          Promise.allSettled([
            fetchDataFast(),
            fetchDataLong(),
            fetchDataError(),
          ])
            .then((results) =>
              results.forEach((result) =>
                console.log(result.value, result.status)
              )
            )
            .catch((error) => console.log(error))
            .finally(line());
        }}
      >
        Promise.allSettled without error
      </button>
      {/* // Promise.any dla fetchDataFast, fetchDataLong */}
      <button
        onClick={() => {
          Promise.any([fetchDataFast(), fetchDataLong()])
            .then(resultLogger)
            .catch(errorLogger)
            .finally(line());
        }}
      >
        Promise.any without error
      </button>
      {/* // Promise.any dla fetchDataFast, fetchDataLong, oraz fetchDataError */}
      <button
        onClick={() => {
          Promise.any([fetchDataFast(), fetchDataLong(), fetchDataError()])
            .then(resultLogger)
            .catch(errorLogger)
            .finally(line());
        }}
      >
        Promise.any without error
      </button>
      {/* // Promise.race dla fetchDataFast, fetchDataLong, oraz fetchDataError */}
      <button
        onClick={() => {
          Promise.race([fetchDataFast(), fetchDataLong(), fetchDataError()])
            .then(resultLogger)
            .catch(errorLogger)
            .finally(line());
        }}
      >
        Promise.race without error
      </button>
      {/* // Promise.race dla fetchDataLong, oraz fetchDataError */}
      <button
        onClick={() => {
          Promise.race([fetchDataLong(), fetchDataError()])
            .then(resultLogger)
            .catch(errorLogger)
            .finally(line());
        }}
      >
        Promise.race with error
      </button>
    </div>
  );
};
