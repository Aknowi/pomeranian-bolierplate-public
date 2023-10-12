import { Cards } from '../Components/Cards';
import memo from '../Images/memo_game.png';
import mole from '../Images/mole_game.png';
import more from '../Images/more_less.png';
import './styles.css';

// More or less game (react) http://localhost:3000/exercises/react/more-or-less-game
// Hit the mole http://localhost:3000/exercises/react/hit-the-mole
// memory game http://localhost:3000/exercises/react/memo-game
const GamesForCard = [
  {
    key: 1,
    src: more,
    alt: 'More or Less game preview',
    title: 'More or Less',
    href: '/exercises/react/more-or-less-game',
  },
  {
    key: 2,
    src: mole,
    alt: 'Hit The Mole game preview',
    title: 'Hit The Mole',
    href: '/exercises/react/hit-the-mole',
  },
  {
    key: 3,
    src: memo,
    alt: 'Memory game preview',
    title: 'Memory',
    href: '/exercises/react/memo-game',
  },
];
export const Games = () => {
  return (
    <div className="game-card-wrapper">
      {GamesForCard.map((game) => {
        return (
          <Cards
            src={game.src}
            alt={game.alt}
            title={game.title}
            href={game.href}
          />
        );
      })}
    </div>
  );
};
