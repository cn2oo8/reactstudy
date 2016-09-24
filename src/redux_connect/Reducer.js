import * as Actions from "./Actions.js";
import { combineReducers } from 'redux'
import Immutable from 'immutable';


/*var initState=[{time:0,"text":"tttt"}];

var TodoReducer=function(state , action) {
    if(!state){
        state= initState;
    }
    switch (action.type) {
        case Actions.ADD_ITEM:
              var time=new Date().getTime();
              var newState = [...state, {'time':time,"text":action.text} ]
              return newState;
        case Actions.REMOVE_ITEM:
              //var nextState = _.cloneDeep(state) // 用到了 lodash 的深克隆
              state.pop() 
              var newState = [...state]
              return newState;
        default:
            return state;
    }
}
*/

//不支持嵌套模式
//https://segmentfault.com/a/1190000002909224
var initState=Immutable.List([{time:0,"text":"tttt"}]);



var TodoReducer=function(state , action) {
    if(!state){
        state= initState;
    }
    switch (action.type) {
        case Actions.ADD_ITEM:
              var time=new Date().getTime();
              var newState = state.push( {'time':time,"text":action.text} )
              return newState;
        case Actions.REMOVE_ITEM:
              //var nextState = _.cloneDeep(state) // 用到了 lodash 的深克隆
              state.pop() 
              var newState = state.pop();
              return newState;
        default:
            return state;
    }
}


var rootReducer=combineReducers({
  items:TodoReducer
});

export default rootReducer;