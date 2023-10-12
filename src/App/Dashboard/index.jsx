import { SeeMore } from '../Components/SeeMore/SeeMore';
import './styles.css';
import { EditIcon } from '../Components/Icons/EditIcon';
import { CodeIcon } from '../Components/Icons/CodeIcon';
import { Game } from '../Components/Icons/Game';
import { BlogIcon } from '../Components/Icons/BlogIcon';
import { User } from '../Components/Icons/User';

export const Dashboard = () => {
  const dashboardData = [
    {
      id: 1,
      title: 'Ćwiczenia',
      icon: <EditIcon />,
      description: 'przegląd ćwiczeń',
      href: '/exercise',
      // blog, formularz, FAQ, toDo list itd.
    },
    {
      id: 2,
      title: 'Gry',
      icon: <Game />,
      description: 'chwila relaksu',
      href: '/games',
    },
    {
      id: 3,
      title: 'O kursie',
      icon: <BlogIcon />,
      description: 'informacje o kursie',
      href: '/course',
    },
    {
      id: 4,
      title: 'Tech Stack',
      icon: <CodeIcon />,
      description: 'stack technologiczny realizowany na kursie',
      href: '/tech-stack',
    },
    {
      id: 5,
      title: 'O mnie',
      icon: <User />,
      description: 'kilka zdań o mnie',
      href: '/about-me',
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-cards-wrapper">
        {dashboardData.map((element) => {
          return (
            <SeeMore
              key={element.id}
              title={element.title}
              icon={element.icon}
              description={element.description}
              href={element.href}
            />
          );
        })}
      </div>
    </div>
  );
};
