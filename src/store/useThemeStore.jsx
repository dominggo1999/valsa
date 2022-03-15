import create from 'zustand';
import produce from 'immer';

export const initialTheme = {
  name: '',
};

const changeTheme = (set, newTheme) => {
  return set(produce((draft) => {
    draft.theme.name = newTheme;
  }));
};

const useThemeStore = create((set, get) => {
  return {
    theme: initialTheme,
    changeTheme: (newTheme) => changeTheme(set, newTheme),
  };
});

export default useThemeStore;
