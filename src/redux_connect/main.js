import TodoApp from "./TodoApp.js";
import ListStore from "./Store.js";
import { Provider } from 'react-redux'

const buttonsInstance = (
    <Provider store={ListStore}>
      <TodoApp/>
    </Provider>
);

ReactDOM.render(buttonsInstance, document.getElementById('button_area'));