// redux
import { Provider } from 'react-redux';
import store from './redux/store';

// components
import Question from './components/Question';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        haiiii
        <Question />
      </div>
    </Provider>
  );
}

export default App;
