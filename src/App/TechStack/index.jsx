import './styles.css';
import Css from '../Images/tech-stack/css.svg';
import { Html } from '../Components/Icons/Html.jsx';
import { Ts } from '../Components/Icons/Ts.jsx';
import { Js } from '../Components/Icons/Js.jsx';
import { React } from '../Components/Icons/React.jsx';
import { Github } from '../Components/Icons/Github.jsx';
import Wordpress from '../Images/tech-stack/wordpresss.svg';
import { Jest } from '../Components/Icons/Jest.jsx';
import { Redux } from '../Components/Icons/Redux.jsx';
import { Firebase } from '../Components/Icons/Firebase.jsx';
import { Git } from '../Components/Icons/Git.jsx';
import { Discord } from '../Components/Icons/Discord.jsx';
import { Readmine } from '../Components/Icons/Readmine.jsx';
import Vscode from '../Images/tech-stack/vscode.png';
import { NavLink } from 'react-router-dom';

const techStackBasics = [
  {
    src: Css,
    text: 'css',
  },
  {
    component: <Html />,
    text: 'html',
  },
  {
    component: <Js />,
    text: 'javascript',
  },
  {
    component: <React />,
    text: 'react',
  },
  {
    component: <Github />,
    text: 'github',
  },
  {
    component: <Git />,
    text: 'git',
  },
  {
    src: Vscode,
    text: 'vscode',
  },
  {
    component: <Discord />,
    text: 'discord',
  },
  {
    src: Wordpress,
    text: 'wordpress',
  },
];

const techStackIntro = [
  {
    component: <Ts />,
    text: 'typescript',
  },
  {
    component: <Jest />,
    text: 'jest',
  },
  {
    component: <Firebase />,
    text: 'firebase',
  },
  {
    component: <Redux />,
    text: 'redux',
  },
  {
    src: require('../Images/tech-stack/jira.png'),
    text: 'jira',
  },
  {
    component: <Readmine />,
    text: 'readmine',
  },
];

export const TechStack = () => {
  return (
    <div className="tech-stack-box">
      <nav>
        <NavLink to="/dashboard" className="tech-back-link">
          &#60; Tech stack
        </NavLink>
      </nav>
      <p className="tech-stack-text">
        Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczyłam się
        podczas kursu.
      </p>

      <div className="tech-stack-grid ">
        <p className="tech-stack-grid-text">Podstawy</p>
        {techStackBasics.map((element, i) => {
          return (
            <div key={i}>
              {element.component && element.component}
              {element.src && <img src={element.src} alt={element.text} />}
              <p>{element.text}</p>
            </div>
          );
        })}
      </div>

      <div className="tech-stack-grid ">
        <p className="tech-stack-grid-text">Pierwsze kroki</p>
        {techStackIntro.map((element, i) => {
          return (
            <div key={i}>
              {element.component && element.component}
              {element.src && <img src={element.src} alt={element.text} />}
              <p>{element.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
