import './styles.css';
import Logo from '../Images/logo.png';
import { BackLink } from '../Components/BackLink';
import { NavLink } from 'react-router-dom';
import certificate from '../Images/1.PNG';
import certificateP2 from '../Images/2.PNG';
import tap from '../Images/tap.png';
import { useState } from 'react';

export const Course = () => {
  const [isCertyficateClicked, setIsCertyficateClicked] = useState(false);

  const handleCertificateOnClick = () => {
    setIsCertyficateClicked(!isCertyficateClicked);
    console.log(isCertyficateClicked);
  };

  return (
    <div className="course-wrapper">
      <BackLink link="/dashboard" title="O kursie" />
      <div className="course-box">
        <div className="course-note">
          <h2>Kurs Junior Front-end Developer</h2>
          <p>
            Latem 2023 przebyłam 3-miesięczny kurs na Junior Front-end Developer
            od Pomeranian START.IT. Od początku kursu pracowałam na obecnej
            aplikacji, gdzie kodowaliśmi pomniejsze projekty i zapisywaliśmy
            wszystkie przebyte lekcje (widoczne w&nbsp;kodzie na github).
            Głównymi technologiami używanymi praktycznie codziennie były{' '}
            <strong>JavaScript</strong>, <strong>React</strong>,{' '}
            <strong>HTML</strong> i <strong>CSS</strong> oraz{' '}
            <strong>Git</strong>.
          </p>
          <p>
            Zachęcam do zapoznania sie z moimi projektami, nad którymi
            pracowałam podczas mojej ścieżki edukacyjnej. Znaleźć je można w
            zakładce <NavLink to="/games">Gry</NavLink> czy{' '}
            <NavLink to="/exercise">Ćwiczenia</NavLink>.
          </p>

          <h4>
            Zapraszam na moje{' '}
            <a href="https://aknowi.github.io/My-Site/">portfolio</a> i{' '}
            <a href="https://github.com/Aknowi">github</a>, gdzie znajdują się
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
        <div className="course-certificate-div">
          <img
            onClick={handleCertificateOnClick}
            src={isCertyficateClicked ? certificateP2 : certificate}
            alt="certificate"
            className="course-certificate-img"
          />
          <img
            src={tap}
            alt="click here hand"
            className="course-certificate--tap-img"
          />
        </div>
      </div>
    </div>
  );
};
