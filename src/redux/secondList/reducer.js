import types from './types';

export default function secondListReducer(state = [], action) {
  switch (action.type) {
    case types.SET_SELECTED_SECOND_LIST:
      return {
        ...state,
        activities: action.value,
      };
    case types.SET_UNSELECTED_SECOND_LIST:
      return {
        ...state,
        recommendedActivities: action.value,
      };
    default:
      return state;
  }
}
