import './styles.css';
import selfie from '../Images/iwona.png';
import hand from '../Images/waving.png';
import { RoundImage } from '../Components/RoundImage/RoundImage';
import { BackLink } from '../Components/BackLink';
import witcher from '../Images/witcher.svg';

export const AboutMe = () => {
  return (
    <div className="aboutme-wrapper">
      <BackLink link="/dashboard" title="O mnie" />

      <RoundImage src={selfie} size="200px" />
      <div className="aboutme-text">
        <h1>
          <img src={hand} alt="machająca ręka" className="aboutme-img-hand" />{' '}
          Hej, tu Iwona!
        </h1>
        <p>
          Dedykowany technik z ponad 5-letnim doświadczeniem w księgowości,
          analizach finansowych, obecnie w trakcie przejścia do branży IT jako{' '}
          <strong>Junior Frontend Developer</strong>. Absolwent pomorskiego
          kursu START.IT.
          <p>
            Posiadając wiedzę z zakresu podstaw programowania zdobytą podczas
            kursu, wnoszę mieszankę wiedzy branżowej i umiejętności
            praktycznych, które z pewnością przydadzą się w mojej przyszłej roli
            programisty. Dodatkowo moja biegłość w analizie finansowej pozwala
            mi podchodzić do rozwiązywania problemów z analityczną dokładnością
            i logicznym myśleniem.
          </p>
        </p>
        <p className="aboutme-text-witcher">
          Fanka książek i gier fantasy{' '}
          <img
            src={witcher}
            alt="Witcher game logo"
            className="aboutme-img-witcher"
          />
        </p>
      </div>
    </div>
  );
};
