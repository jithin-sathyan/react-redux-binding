import types from './types';

const addToSelectedInFirstList = value => ({
    type: types.SET_SELECTED_FIRST_LIST,
    value,
});

const removeFromSelectedInFirstList = value => ({
    type: types.SET_UNSELECTED_FIRST_LIST,
    value,
});

export default {
    addToSelectedInFirstList,
    removeFromSelectedInFirstList,
};