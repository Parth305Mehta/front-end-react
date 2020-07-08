import { createStore , combineReducers, applyMiddleware} from 'redux';
/*import {initialState } from './reducer'; */
import {Dishes } from './dishes';
import {Leaders } from './leaders';
import {Promotions } from './promotions';
import {Comments } from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore = () =>{
    /*const store = createStore(
        Reducer,
        initialState
    );*/
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}