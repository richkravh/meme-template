import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { MainContext } from './Context';

function App() {
  const { magicWord } = useContext(MainContext);
  return (
    <div className="App">
      {magicWord}
    </div>
  );
}

export default App;
