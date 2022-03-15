import create from 'zustand';
import produce from 'immer';

const initialSearch = {
  prefix: '',
  suffix: '',
  wordCount: 10,
  language: 'english',
  generatedWords: [],
};

const getHeight = () => {
  return 150 + Math.ceil(Math.random() * 100);
};

const changeSearch = (set, key, newSearch) => {
  return set(produce((draft) => {
    if(key === 'generatedWords') {
      draft.search[key] = newSearch.map((item) => {
        return {
          ...item,
          height: getHeight(),
        };
      });
    }else{
      draft.search[key] = newSearch;
    }
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
