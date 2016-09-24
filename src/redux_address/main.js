import Address from "./Address.js";
import ListStore from "./Store.js";
import { Provider } from 'react-redux'

const buttonsInstance = (
    <Provider store={ListStore}>
      <Address/>
    </Provider>
);

ReactDOM.render(buttonsInstance, document.getElementById('button_area'));