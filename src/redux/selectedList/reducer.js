import types from './types';

export default function selectedListReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_TO_SELECTED_LIST:
      const clonnedSelectedList = state.slice(0);
      console.log("============== add selected list =================", clonnedSelectedList)
      clonnedSelectedList.push({ ...action.value })
      return clonnedSelectedList;
    case types.REMOVE_FROM_SELECTED_LIST:
      const clonnedSelectedListForRemoval = state.slice(0);
      console.log("============== remove selected list =================", clonnedSelectedListForRemoval)
      const alreadyExistingItemIndex = clonnedSelectedListForRemoval.findIndex(
        (eachItem) => eachItem.id === action.value.id
      );
      if (alreadyExistingItemIndex !== -1) {
        clonnedSelectedListForRemoval.splice(alreadyExistingItemIndex, 1);
      }
      return clonnedSelectedListForRemoval;
    default:
      return state;
  }
}
