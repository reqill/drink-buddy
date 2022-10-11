import { NextPage } from 'next';

const Home: NextPage = (): JSX.Element => {
  return (
    <div className="flex w-full min-h-screen h-full justify-center align-middle flex-col">
      <h1 className="text-5xl font-bold m-auto pb-2 bg-gradient-to-tr bg-clip-text bg-star text-transparent from-blue-400 to-cyan-400">
        Welcome to drink-buddy
      </h1>
    </div>
  );
};

export default Home;
