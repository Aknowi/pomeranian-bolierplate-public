import './styles/footer.css';
import linkedin from '../Images/icons8-linkedin-30.png';
import mail from '../Images/icons8-mail-30.png';
import github from '../Images/icons8-github-30.png';
import website from '../Images/icons8-website-30.png';

const email = 'iwonkabigos@gmail.com';

export function AppFooter() {
  return (
    <footer>
      <div className="footer-div-img">
        <a href={`mailto:${email}`}>
          <img src={mail} alt="mail logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/iwona-bigos/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin logo" />
        </a>
        <a href="https://github.com/Aknowi" target="_blank" rel="noreferrer">
          <img src={github} alt="linkedin logo" />
        </a>
        <a
          href="https://aknowi.github.io/My-Site/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={website} alt="website logo" />
        </a>
      </div>
    </footer>
  );
}
