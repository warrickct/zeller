import './App.css';
// import { client } from './components/ApolloClient/apolloClient';
import { ApolloProvider } from '@apollo/client';
import HomeView from './components/HomeView';

function App() {
  return (
    // <ApolloProvider client={client}>
    <div className="App">
      <HomeView />
    </div>
    // </ApolloProvider>
  );
}

export default App;
