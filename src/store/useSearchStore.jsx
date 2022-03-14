import create from 'zustand';
import produce from 'immer';

const initialSearch = {
  prefix: '',
  suffix: '',
  wordCount: 10,
  language: 'english',
  generatedWords: [],
};

const changeSearch = (set, key, newSearch) => {
  return set(produce((draft) => {
    draft.search[key] = newSearch;
  }));
};

const useSearchStore = create((set) => {
  return {
    search: initialSearch,
    changeSearch: (key, newSearch) => changeSearch(set, key, newSearch),
  };
});

export const searchSelector = (key) => {
  return useSearchStore((state) => state.search[key]);
};

export const searchMethod = (key) => {
  return useSearchStore((state) => state[key]);
};

export default useSearchStore;
