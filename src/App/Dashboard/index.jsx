import { SeeMore } from '../Components/SeeMore/SeeMore';
import './styles.css';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { MessageIcon } from '../Components/Icons/MessageIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { CodeIcon } from '../Components/Icons/CodeIcon';

export const Dashboard = () => {
  const dashboardData = [
    {
      id: 1,
      title: 'Ćwiczenia',
      icon: <EditIcon />,
      description: 'przegląd ćwiczeń',
      href: '',
      // blog, formularz, FAQ, toDo list itd.
    },
    {
      id: 2,
      title: 'Gry',
      icon: <MessageIcon />,
      description: 'chwila relaksu',
      href: '',
    },
    {
      id: 3,
      title: 'O kursie',
      icon: <PersonalCardIcon />,
      description: 'informacje o kursie',
      href: '',
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
      icon: <CodeIcon />,
      description: 'kilka zdań o mnie',
      href: '',
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
