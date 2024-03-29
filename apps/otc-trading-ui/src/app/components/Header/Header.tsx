import { useAppContent } from '../../hooks/useAppContent';
import './header.scss';
export const Header: React.FC = () => {
  const { appLogo } = useAppContent<string>('labels');
  return (
    <header className="header p-8 mb-4">
      <h3 className="logo">{appLogo}</h3>
    </header>
  );
};
