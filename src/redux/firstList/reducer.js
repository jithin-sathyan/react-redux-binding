import types from './types';

export default function firstListReducer(state = [], action) {
  switch (action.type) {
    case types.UPDATE_FIRST_LIST:
      const clonnedFirstList = state.slice(0);
      const alreadyExistingIndex = clonnedFirstList.findIndex(
        (eachItem) => eachItem.id === action.value.id
      );
      clonnedFirstList[alreadyExistingIndex].selected = !clonnedFirstList[
        alreadyExistingIndex
      ].selected;
      return clonnedFirstList;
    default:
      return state;
  }
}
