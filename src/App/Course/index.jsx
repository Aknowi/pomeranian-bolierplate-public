import './styles.css';
import Logo from '../Images/logo.png';
import { BackLink } from '../Components/BackLink';

export const Course = () => {
  return (
    <div className="course-wrapper">
      <BackLink link="/dashboard" title="O kursie" />

      <div className="course-note">
        <h2>Kurs Junior Front-end Developer</h2>
        <p>
          Latem 2023 przebyłam 3-miesięczny kurs na Junior Front-end Developer
          od Pomeranian START.It. Od początku kursu pracowałam na obecnej
          aplikacji, gdzie kodowaliśmi pomniejsze projekty i zapisywaliśmy
          wszystkie przebyte lekcje (widoczne w kodzie na github). Głównymi
          technologiami używanymi praktycznie codziennie były{' '}
          <strong>javascript</strong>, <strong>react</strong>,{' '}
          <strong>HTML</strong> i <strong>CSS</strong> oraz <strong>git</strong>
          .
        </p>
        <p>
          Zachęcam do zapoznania sie z moimi projektami, nad którymi pracowałam
          podczas mojej ścieżki edukacyjnej. Znaleźć je można w zakładce{' '}
          <a href="/games">Gry</a> czy <a href="/exercise">Ćwiczenia</a>.
        </p>

        <h4>
          Zapraszam na moje{' '}
          <a href="https://aknowi.github.io/My-Site/">portfolio</a> i{' '}
          <a href="https://github.com/Aknowi">githuba</a>, gdzie znajdują się
          dodatkowe projekty tworzone poza kursem.
        </h4>

        <a
          href="https://pomeranianstartit.pl/o-kursie/#"
          target="_blank"
          rel="noreferrer"
        >
          Strona kursu
        </a>
        <div className="course-info">
          <img src={Logo} alt="pomeranian start.IT logo" />
          <p className="course-info-text">
            Projekt uzyskał dofinansowanie ze środków Unii Europejskiej
            z&nbsp;Europejskiego Funduszu Rozwoju. Regionalnego w ramach
            projektu grantowego „Invest in Pomerania 2020”.
          </p>
        </div>
      </div>
      <div>{/*Zdjęcie Certyfikatu*/}</div>
    </div>
  );
};
