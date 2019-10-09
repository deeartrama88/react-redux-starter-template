import { INCREMENT, DECREMENT } from './constants';

export const increment = () => dispatch => dispatch({ type: INCREMENT });
export const decrement = () => dispatch => dispatch({ type: DECREMENT });
