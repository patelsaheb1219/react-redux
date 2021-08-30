// Module Import
import { Provider } from "react-redux";

// File Import
import './App.css';
import Counter from './components/Counter';

// Store Import
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
