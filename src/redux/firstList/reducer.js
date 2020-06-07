import types from './types';

export default function firstListReducer(state = [], action) {
  switch (action.type) {
    case types.SET_SELECTED_FIRST_LIST:
      return {
        ...state,
        activities: action.value,
      };
    case types.SET_UNSELECTED_FIRST_LIST:
      return {
        ...state,
        recommendedActivities: action.value,
      };
    default:
      return state;
  }
}
