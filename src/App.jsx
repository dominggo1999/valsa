import React, { useLayoutEffect } from 'react';
import { AppWrapper, Main } from './App.style';
import Header from './layout/Header/Header';
import Description from './layout/Description/Description';
import Settings from './layout/Settings/Settings';
import WordList from './layout/WordList/WordList';
import './themes/themes.css';
import GlobalStyles from './styles/GlobalStyles';
import useThemeStore from './store/useThemeStore';
import themes from './themes/themes.json';
import ScrollTopButton from './common/ScrollTopButton/ScrollTopButton';
import LoadingTransition from './layout/LoadingTransition/LoadingTransition';
import Footer from './layout/Footer/Footer';

const savedTheme = localStorage.getItem('theme');

const App = () => {
  const theme = useThemeStore((state) => state.theme.name);
  const changeTheme = useThemeStore((state) => state.changeTheme);

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    const available = themes.map((i) => i.name);

    if(savedTheme && available.indexOf(savedTheme) !== -1) {
      changeTheme(savedTheme);
    }else{
      localStorage.setItem('theme', 'originale');
      changeTheme('originale');
    }
  }, []);

  return (
    <AppWrapper
      theme={theme || savedTheme}
      className={theme || savedTheme}
    >
      <GlobalStyles />
      <LoadingTransition />
      <Main>
        <Header />
        <Description />
        <Settings />
        <WordList />
      </Main>
      <Footer />
      <ScrollTopButton />
    </AppWrapper>
  );
};

export default App;
