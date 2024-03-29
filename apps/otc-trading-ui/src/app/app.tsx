// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ContentProvider } from './components/ContentProvider/ContentProvider';
import { Header } from './components/Header';
import { TradeForm } from './components/TradeForm';

export function App() {
  return (
    <ContentProvider>
      <Header />
      <div className="container">
        <TradeForm />
      </div>
    </ContentProvider>
  );
}

export default App;




