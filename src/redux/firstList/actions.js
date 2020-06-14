import types from './types';

const updateFirstList = value => ({
    type: types.UPDATE_FIRST_LIST,
    value,
});

export default {
    updateFirstList,
};