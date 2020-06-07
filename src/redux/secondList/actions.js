import types from './types';

const addToSelectedInSecondList = value => ({
    type: types.SET_SELECTED_SECOND_LIST,
    value,
});

const removeFromSelectedInSecondList = value => ({
    type: types.SET_UNSELECTED_SECOND_LIST,
    value,
});

export default {
    addToSelectedInSecondList,
    removeFromSelectedInSecondList,
};