import types from './types';

const updateSecondList = value => ({
    type: types.UPDATE_SECOND_LIST,
    value,
});

export default {
    updateSecondList,
};