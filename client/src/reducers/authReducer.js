import { FETCH_USER } from '../actions/types';
// state = {} , initial empty state
// no actions or types yet so just the deafult
export default function (state = {}, action) {
    console.log(action.payload);

    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}