import * as Actions from "./Actions.js";
import { combineReducers } from 'redux'

var initState=[{time:0,"text":"tttt"}];

var TodoReducer=function(state , action) {
    console.log(state);
    console.log(action);
    if(!state){
        state= initState;
    }
    switch (action.type) {
        case Actions.ADD_ITEM:
              var time=new Date().getTime();
              state.push({'time':time,"text":action.text});
              return state
        case Actions.REMOVE_ITEM:
              //var nextState = _.cloneDeep(state) // 用到了 lodash 的深克隆
              state.pop() 
              return state;
        default:
            return state;
    }
}


var rootReducer=combineReducers({
  items:TodoReducer
});

export default rootReducer;