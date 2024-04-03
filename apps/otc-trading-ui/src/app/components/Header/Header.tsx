import './header.scss';

type HeaderProps = {
  headerTitle: string;
};
export const Header: React.FC<HeaderProps> = ({ headerTitle }) => {
  return (
    <header className="header p-8 mb-4">
      <h3 className="logo">{headerTitle}</h3>
    </header>
  );
};
