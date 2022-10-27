import { AppProps } from 'next/app';
import '../styles/global.css';

interface CustomPageProps {
  // custom page props
}
// TODO: add layouts

const App = ({ Component, pageProps }: AppProps<CustomPageProps>) => {
  return (
    // TODO: provider wrappers (auth, session, redux etc.)
    <div className="bg-slate-900 min-h-screen m-0 p-0 w-screen">
      <main className="h-full w-full min-h-screen">
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default App;
