import axios from 'axios';
import { FETCH_USER } from './types';
// actionCreater fetchUser
// whenever the action is called it will return a function
// redux thunk watches actions and automatically 
// dispatches them to all the reducers in our app
// export const fetchUser = () => {
//     return function (dispatch) {
//         axios
//             .get('/api/current_user')
//             .then(res => dispatch({ type: FETCH_USER, payload: res }));
//     };
// };

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });

};