import { createStore } from 'redux';
import TodoReducer from './Reducer'


var store = createStore(TodoReducer)
/*
store.subscribe(function () {
  console.log(store);
  console.log('the year is: ', store.getState().items.length);
});
*/
export default store