// redux
import { Provider } from 'react-redux';
import store from './redux/store';

// components
import Home from './components/views/Home';
import Question from './components/views/Question';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App min-h-screen bg-gradient-to-tr from-blue-500 to-blue-400 text-white">
        <Home />
        {/* <Question /> */}
      </div>
    </Provider>
  );
}

export default App;
