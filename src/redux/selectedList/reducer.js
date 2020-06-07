import types from './types';

export default function selectedListReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_TO_SELECTED_LIST:
      return {
        ...state,
        activities: action.value,
      };
    case types.REMOVE_FROM_SELECTED_LIST:
      return {
        ...state,
        recommendedActivities: action.value,
      };
    default:
      return state;
  }
}
