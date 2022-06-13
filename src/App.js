
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header'
import UserDetail from './components/Home';

import store from './redux/store';
import Navbar from './components/Navbar';


function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <div className="container">
         <Header />
         <UserDetail />
      </div>
    </Provider>
  );
}

export default App;
