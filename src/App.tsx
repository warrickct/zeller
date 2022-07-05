import { Provider } from 'react-redux';
import HomeView from './components/HomeView';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <HomeView />
    </Provider>
    
  );
}

export default App;
