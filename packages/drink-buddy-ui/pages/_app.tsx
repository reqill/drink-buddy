import { AppProps } from 'next/app';

interface CustomPageProps {
  // custom page props
}

const App = ({ Component, pageProps }: AppProps<CustomPageProps>) => {
  return <Component {...pageProps} />;
};

export default App;
