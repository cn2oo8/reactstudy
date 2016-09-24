import { createStore } from 'redux';
import AddressReducer from './Reducer'


var store = createStore(AddressReducer)
/*
store.subscribe(function () {
  console.log(store);
  console.log('the year is: ', store.getState().items.length);
});
*/
export default store