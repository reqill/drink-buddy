import { FC, ReactNode } from 'react';
import '../styles/main.css';

export const Header1: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <h1 className="text-5xl font-bold m-auto pb-6 bg-gradient-to-tr bg-clip-text bg-star text-transparent from-blue-400 to-cyan-400">
      {children}
    </h1>
  );
};
