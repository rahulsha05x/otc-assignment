// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Header } from './components/Header';
import { TradeForm } from './components/TradeForm';
import { useAppContent } from './hooks/useAppContent';

export function App() {
  const { appLogo } = useAppContent<string>('labels');
  return (
    <>
      <Header headerTitle={appLogo} />
      <div className="container">
        <TradeForm />
      </div>
    </>
  );
}

export default App;




