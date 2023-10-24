export const CookieStorage = () => {
  // --------------------------------------
  // COOKIES
  // --------------------------------------

  //    Cookies to małe fragmenty danych przechowywane w przeglądarce użytkownika.
  //    Mają określony czas życia, po którym są automatycznie usuwane.
  //    Mają ograniczoną pamięć (4kb)
  //    Są przechowywane w formacie klucz-wartość
  //    Są przechowywane w formacie tekstowym
  //    Są wysyłane wraz z każdym zapytaniem do serwera

  //   Kiedy używamy
  //   - do przechowywania informacji o użytkowniku
  //   - do przechowywania ustawień
  //   - do śledzenia użytkownika
  //   - do śledzenia sesji użytkownika

  const setCookie = () => {
    // WAŻNE - jeden klucz przy zapisie do cookiesów może mieć tylko jedną wartość
    // (jeśli chcemy dać następny klucz, musimy drugi raz wywołać przypisanie)
    document.cookie = "username=John; expires=Thu, 18 Dec 2023 12:00:00 UTC'";
    document.cookie = "surname=John; expires=Thu, 18 Dec 2023 12:00:00 UTC'";
  };
  const getCookie = () => {
    const cookies = document.cookie.split('; ');
    console.log(cookies);
    const cookieObject = {};

    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      cookieObject[name] = value;
    }

    console.log(cookieObject, 'cookieObject');
  };

  return (
    <div>
      <h1>Cookie Storage</h1>
      <div>
        <button onClick={setCookie}>Set cookie</button>
        <button onClick={getCookie}>Get cookie</button>
      </div>
    </div>
  );
  // -----------------------------------------------------------------------------
  // LINKI POMOCNICZE:
  // https://www.oracle.com/pl/database/what-is-json/
  // https://developer.mozilla.org/en-US/docs/Glossary/XML
  // https://appmaster.io/blog/json-vs-xml
  // https://www.w3schools.com/js/js_json_stringify.asp
  // https://frontstack.pl/czym-jest-local-storage-i-jak-uzywac/
  // https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
  // https://www.geeksforgeeks.org/difference-between-local-storage-session-storage-and-cookies
  // https://www.w3schools.com/js/js_cookies.asp
  // https://javascript.info/eval
  // https://javascript.info/json

  // https://developer.mozilla.org/en-US/docs/Web/Guide/Parsing_and_serializing_XML
  // https://geshan.com.np/blog/2022/11/nodejs-xml-parser/
  //   https://javascript.info/indexeddb
  // https://javascript.info/cookie
  // https://javascript.info/localstorage
};
