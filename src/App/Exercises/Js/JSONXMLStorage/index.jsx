import { CookieStorage } from './CookieStorage';
import { LocalStorage } from './LocalStorage';
import { SessionStorage } from './SessionStorage';
import './styles.css';

export const JSONXMLStorage = () => {
  // --------------------------------------
  // JSON
  // --------------------------------------

  // JSON to sposób reprezentacji strukturalnych danych w formie tekstu.
  // Jest to łatwy do zrozumienia format, który jest czytelny zarówno dla ludzi, jak i dla maszyn.
  // Możemy go porównać do listy z danymi, gdzie każdy element ma swoje właściwości i wartości.

  // Przykłady zastosowania JSONa:

  // 1. API
  //        JSON to sposób reprezentacji strukturalnych danych w formie tekstu. Jest to łatwy do zrozumienia format,
  //        który jest czytelny zarówno dla ludzi, jak i dla maszyn.
  //        Możemy go porównać do listy z danymi, gdzie każdy element ma swoje właściwości i wartości.

  // 2. Przechowywanie konfiguracji
  //        JSON jest często używany do przechowywania konfiguracji lub ustawień aplikacji,
  //        co ułatwia zarządzanie tymi danymi

  // 3. Wymiana danych
  //        Jeśli chcemy udostępnić dane pomiędzy różnymi aplikacjami lub serwisami
  //        JSON jest świetnym wyborem ze względu na swoją prostotę i uniwersalność.

  // Podsumowanie:
  //
  // Dlatego warto poznać i zrozumieć JSON-a. To narzędzie, które pomaga nam w przechowywaniu,
  // wymianie i zarządzaniu danymi w sposób łatwy dla nas i dla maszyn.
  // Pozwala nam to na budowanie efektywnych i skalowalnych aplikacji,
  // które mogą współpracować ze sobą bez problemów.

  // MIME - Multipurpose Internet Mail Extension - standardowy sposób kodowania danych
  // dla JSONa jest to application/json (Content-Type: application/json)

  // --------------------------------------
  // JSON - serializacja(parsowanie) i deserializacja
  // --------------------------------------

  const jsonString = '{"name":"John", "age":30, "car":null}';

  // JSON.parse() - deserializacja
  const jsonObject = JSON.parse(jsonString);

  console.log(jsonString, 'jsonString');
  console.log(jsonObject, 'jsonObject');
  console.log(jsonObject.name, jsonObject.age, 'jsonObject');

  // JSON.stringify() - parsowanie/serializacja

  const objForJSONString = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    cars: ['Ford', 'BMW', 'Fiat'],
    isAdult: true,
  };

  const jsonStringFromObj = JSON.stringify(objForJSONString);

  console.log(objForJSONString, 'objForJSONString');
  console.log(jsonStringFromObj, 'jsonStringFromObj');

  // --------------------------------------
  // Przykładowe parsowanie typów prostych w JS
  // --------------------------------------

  const emptyObject = '{}';
  console.log(JSON.parse(emptyObject));

  const boolean = 'true';
  console.log(JSON.parse(boolean));

  const exampleObject = {
    name: 'John',
    age: 30,
    cars: null,
    houses: [undefined],
  };

  const exampleObjectString = JSON.stringify(exampleObject);
  console.log(exampleObjectString);
  console.log(JSON.parse(exampleObjectString));

  // --------------------------------------
  // RÓŻNICE MIĘDZY OBIEKTEM JS A JSONem
  // --------------------------------------

  // 1. W JSONie nazwy właściwości muszą być w cudzysłowiu
  // 2. JSON obsługuje tylko podstawowe typy danych: string, number, boolean, object, array, null.

  // --------------------------------------
  // BŁĄD PARSOWANIA
  // --------------------------------------
  // const jsonStringWithError = '{"name":"John, "age":30, "car":null}';
  // console.log(JSON.parse(jsonStringWithError));

  // --------------------------------------
  // EVAL() - wykonuje dowolny kod JavaScript - co może być niebezpieczne,
  // ponieważ może wykonać złośliwy kod co stwarza ryzyko ataków XSS
  // https://sekurak.pl/czym-jest-xss/
  // --------------------------------------
  eval('console.log("hello bro!!")');

  return (
    <div>
      <div>JSON | XML | LocalStorage | SessionStorage | Cookies</div>
      {/* LOCAL STORAGE */}
      {/* import {LovalStorage from './LocalStorage' '} */}
      <LocalStorage />
      <SessionStorage />
      <CookieStorage />
    </div>
  );
};
