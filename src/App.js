// Module Import
import { Provider } from "react-redux";

// File Import
import './App.css';

// Store Import
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello World</h1>
      </div>
    </Provider>
  );
}

export default App;
