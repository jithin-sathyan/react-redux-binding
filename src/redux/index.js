import { combineReducers, createStore } from 'redux';
import initialState from "./initialState";
import firstList from './firstList';
import secondList from './secondList';
import selectedList from './selectedList';

export const rootReducer = combineReducers({
    [firstList.name]: firstList.reducer,
    [secondList.name]: secondList.reducer,
    [selectedList.name]: selectedList.reducer,
});

export const configureStore = () => {
    const initialReduxState = { ...initialState };

    return createStore(
        rootReducer,
        initialReduxState,
    );
};
