import { COMMENTS } from '../share/comments';
import { PROMOTIONS } from '../share/promotions';
import { LEADERS } from '../share/leaders';
import { DISHES } from '../share/dishes';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions:PROMOTIONS,
    leaders:LEADERS
};

export const Reducer = (state = initialState ,action) =>{
    return state;
};