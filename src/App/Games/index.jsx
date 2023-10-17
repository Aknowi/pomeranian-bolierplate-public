import { Cards } from '../Components/Cards';
import memo from '../Images/memo_game.png';
import mole from '../Images/mole_game.png';
import more from '../Images/more_less.png';
import './styles.css';

const GamesForCard = [
  {
    key: 1,
    src: more,
    alt: 'More or Less game preview',
    title: 'More or Less',
    navlink: '/games/more-or-less-game',
  },
  {
    key: 2,
    src: mole,
    alt: 'Hit The Mole game preview',
    title: 'Hit The Mole',
    navlink: '/games/git-the-mole-game',
  },
  {
    key: 3,
    src: memo,
    alt: 'Memory game preview',
    title: 'Memory',
    navlink: '/games/memory-game',
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
            navlink={game.navlink}
          />
        );
      })}
    </div>
  );
};
