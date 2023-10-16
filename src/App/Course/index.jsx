import './styles.css';
import { Logo } from '../Components/Logo/Logo';

export const Course = () => {
  return (
    <div className="course-wrapper">
      <h2>Kurs Junior Front-end Developer od Pomeranian START.IT</h2>
      <p>
        Latem 2023 przebyłam 3-miesięczny kurs na Junior Front-end Developer od
        Pomeranian START.It. Zachęcam do zapoznania sie z moimi projektami, nad
        którymi pracowałam podczas mojej ścieżki edukacyjnej. Znaleźć je można w
        zakładce Gry czy Ćwiczenia.
      </p>

      <p>
        Zapraszam na moje portfolio i githuba, w którym znajdują się dodatkowe
        projekty tworzone poza kursem.
      </p>

      <a href="https://pomeranianstartit.pl/o-kursie/#" target="_blank">
        Strona kursu
      </a>
      {/* logo kursu */}
      <div className="course-info">
        <Logo />
        <p className="course-info-text">
          Projekt uzyskał dofinansowanie ze środków Unii Europejskiej z
          Europejskiego Funduszu Rozwoju. Regionalnego w ramach projektu
          grantowego „Invest in Pomerania 2020”.
        </p>
      </div>
    </div>
  );
};
