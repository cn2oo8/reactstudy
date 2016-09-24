import * as Actions from "./Actions.js";
import ListStore from "./Store.js";

var TodoApp = React.createClass({
	getInitialState: function () {
    return ListStore.getState();
  },

  componentDidMount: function() {
    ListStore.subscribe(this._onChange);
  },

  componentWillUnmount: function() {
  },

  _onChange: function () {
    this.setState(ListStore.getState());
  },
    render: function() {
        return (
            <div>
            	 <button onClick={this.newItem}>New Item</button>
			    <button onClick={this.removeItem}>Remove Item</button>
			    <br/>
			    <ul>
			     {this.state.items.map(function(item){
                		return <li key={item.time}>{item.text}</li>
                	})}
			    </ul>
            </div>
        );
    },
    newItem:function(event) {
    	var action=Actions.addItem('new item'+new Date().getTime());
    	ListStore.dispatch(action);
    },
	removeItem:function(event) {
	   ListStore.dispatch(Actions.removeItem(new Date().getTime()));
	}
});

export default TodoApp;