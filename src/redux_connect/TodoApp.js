import * as Actions from "./Actions.js";
import ListStore from "./Store.js";
import { connect } from 'react-redux'

var TodoApp = React.createClass({
/*	getInitialState: function () {
    return this.props.items;
  },*/
  componentDidMount: function() {
   // ListStore.subscribe(this._onChange);
  },

  componentWillUnmount: function() {
  },

  _onChange: function () {
    this.setState(ListStore.getState());
  },
  render: function() {
  //从组件的props属性中导入2个方法   也可以导一个变量
  /*
  * 以下代码编译后==
      var _props = this.props;
      var addItem = _props.addItem;
      var removeItem = _props.removeItem;
  */

  const {addItem, removeItem,items} = this.props;

      return (
          <div>
          	 <button onClick={addItem}>New Item</button>
		         <button onClick={removeItem}>Remove Item</button>
		    <br/>
		    <ul>
		     {items.map(function(item){
              		return <li key={item.time}>{item.text}</li>
              	})}
		    </ul>
          </div>
      );
  }
});


/**
 *将state做一次映射转换，主要是降低层级，
 如之前： state.parent.child
 可以缩减为state.mylist 这样的方式取值

 主要因为redux的store只存在一个，避免树形结果过深入，当然，这里没有使用到，因为只有一个层级

 http://www.jianshu.com/p/94c988cf11f3

  使用这种方式后，redux只会做shallowEquals比较，即只比较对象地址是否一致，不会深入下一级别比较。（性能上考虑）
  这样的，在reducer的时候，需要考虑用Immutable State，及如果该对象的内容变了，该对象的地址也跟随发生变化，否则会出现界面不更新

*/
var mapStateToProps = (state) => {
  return {'items':state.items};
}


//将方法做一次映射，可以在里面做一些逻辑处理,同时可以将其从view层脱离出来
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addItem: function(e){
        dispatch(Actions.addItem("newitem"+new Date().getTime()));
    },
    removeItem: function(e){
        dispatch(Actions.removeItem("newitem"+new Date().getTime()));
    }
  }
}


//如果要用connect方式对组件使用，必须使用以下方法，并配置在main里面的 Provider方式进行使用
//说明文档：http://www.tuicool.com/articles/RfArqiQ

const connectedComp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);
export default connectedComp;