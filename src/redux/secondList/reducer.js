import types from './types';

export default function secondListReducer(state = [], action) {
  switch (action.type) {
    case types.UPDATE_SECOND_LIST:
      const clonnedSecondList = state.slice(0);
      const alreadyExistingIndex = clonnedSecondList.findIndex(
        (eachItem) => eachItem.id === action.value.id
      );
      clonnedSecondList[alreadyExistingIndex].selected = !clonnedSecondList[
        alreadyExistingIndex
      ].selected;
      return clonnedSecondList;
    default:
      return state;
  }
}
