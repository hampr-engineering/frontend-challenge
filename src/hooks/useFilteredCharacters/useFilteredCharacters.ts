import { useCallback, useMemo, useReducer } from 'react';
import filtersReducer from '../../reducers/filtersReducer';
import { Character } from '../../types';
import jsonData from '../../data/characters.json';

const data: Character[] = jsonData as Character[];

const initialFilterState = {
  name: '',
  tags: [],
};

export const useFilteredCharacters = () => {
  const [filterState, dispatch] = useReducer(filtersReducer, initialFilterState);

  // TODO: fill in this type
  const handleNameOnChange = useCallback((e: any) => {
    const { value } = e.currentTarget;

    dispatch({ type: 'UPDATE NAME', value });
  }, []);

  const filteredCharacters = useMemo(() => {
    let currentCharacters = data;

    if (filterState.name) {
      currentCharacters = data.filter(character => character.name.includes(filterState.name));
    }

    return currentCharacters;
  }, [filterState]);

  return { filteredCharacters, handleNameOnChange, filterState, dispatch };
};
