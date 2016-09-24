import * as Actions from "./Actions.js";

var initState={
	items:[{time:0,"text":"tttt"}]
};

export default function TodoReducer(state , action) {
    if(!state){
        state= initState;
    }
    switch (action.type) {
        case Actions.ADD_ITEM:
              var time=new Date().getTime();
              state.items.push({'time':time,"text":action.text});
              var nextState ={'items':state.items};  // 用到了 lodash 的深克隆
              return nextState
        case Actions.REMOVE_ITEM:
              //var nextState = _.cloneDeep(state) // 用到了 lodash 的深克隆
              state.items.pop() 
              var nextState ={'items':state.items};  // 用到了 lodash 的深克隆
              return nextState
        default:
            return state;
    }
}