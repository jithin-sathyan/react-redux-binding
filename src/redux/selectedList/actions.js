import types from './types';

const addToSelectedList = value => ({
    type: types.ADD_TO_SELECTED_LIST,
    value,
});

const removeFromSelectedList = value => ({
    type: types.REMOVE_FROM_SELECTED_LIST,
    value,
});

export default {
    addToSelectedList,
    removeFromSelectedList,
};