import './styles.css';
import selfie from '../Images/iwona.png';
import hand from '../Images/waving.png';
import { RoundImage } from '../Components/RoundImage/RoundImage';
import { NavLink } from 'react-router-dom';

export const AboutMe = () => {
  return (
    <div className="aboutme-wrapper">
      <nav>
        <NavLink to="/dashboard" className="aboutme-back-link">
          &#60; O mnie
        </NavLink>
      </nav>
      <RoundImage src={selfie} size="200px" />
      <div className="aboutme-text">
        <h1>
          <img src={hand} alt="machająca ręka" className="aboutme-img-hand" />{' '}
          Hej, tu Iwona!
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tincidunt urna sit amet ex porttitor, vitae blandit risus sagittis.
          Fusce tellus turpis, condimentum in sapien et, porta aliquet nisi. Sed
          sit amet luctus ligula. Etiam eu est sed eros consequat mattis. Etiam
          sed volutpat mi. Donec congue porttitor mauris vitae.{' '}
        </p>
      </div>
    </div>
  );
};
