import React, { useEffect } from 'react';
import { AppWrapper, Main } from './App.style';
import Header from './layout/Header/Header';
import Description from './layout/Description/Description';
import Settings from './layout/Settings/Settings';
import WordList from './layout/WordList/WordList';

const App = () => {
  // useEffect(() => {
  //   const results = pseudoWords({
  //     language: 'swedish',
  //   });
  //   console.log(results);
  // }, []);

  return (
    <AppWrapper>
      <Main>
        <Header />
        <Description />
        <Settings />
        <WordList />
      </Main>
    </AppWrapper>
  );
};

export default App;
