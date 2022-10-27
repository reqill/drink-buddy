import { NextPage } from 'next';
import { Header1 } from '@drink-buddy/base-ui-components';

const Home: NextPage = (): JSX.Element => {
  return (
    <div className="flex w-full min-h-screen h-full justify-center align-middle flex-col">
      <Header1>Welcome to drink-buddy!</Header1>
    </div>
  );
};

export default Home;
