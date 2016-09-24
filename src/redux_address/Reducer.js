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
var initState=Immutable.fromJS({
      "provinceList":[{"areaId":-1,"name":"-请选择-"},{"areaId":1,"name":"四川省"},{"areaId":2,"name":"广东省"},{"areaId":3,"name":"湖南省"}],
      "cityList":[{"areaId":-1,"name":"-请选择-"}],
      "townList":[{"areaId":-1,"name":"-请选择-"}]
});


var AddressReducer=function(state , action) {
    if(!state){
        state= initState;
    }

     console.log(action.addrId);
     var newState=state;
    switch (action.type) {
        case Actions.PROVINCE_CHANGE:
             newState= newState.set('proId',action.addrId);
             newState= newState.set('cityId',-1);
              newState=newState.set('townId',-1);
              newState =newState.set('townList',Immutable.fromJS([{"areaId":-1,"name":"-请选择-"}]));
              newState =newState.set('cityList',Immutable.fromJS([{"areaId":-1,"name":"-请选择-"},{"areaId":action.addrId*10+1,"name":"成都市"},{"areaId":action.addrId*10+2,"name":"资阳市"},{"areaId":action.addrId*10+3,"name":"广元市"}]));
              return newState;
        case Actions.CITY_CHANGE:
              newState=newState.set('cityId',action.addrId);
              newState=newState.set('townId',-1);
              newState =newState.set('townList',Immutable.fromJS([{"areaId":-1,"name":"-请选择-"},{"areaId":action.addrId*10+1,"name":"武侯区"},{"areaId":action.addrId*10+2,"name":"锦江区"},{"areaId":action.addrId*10+3,"name":"高新区"}]));
              return newState;
        default:
            return state;
    }
}


var rootReducer=combineReducers({
  addressInfo:AddressReducer
});

export default rootReducer;