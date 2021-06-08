import './App.css';
import Conversion from './components/Conversion';
import Grafos from './components/Grafos';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Conversion />
        <Grafos />
      </header>
    </div>
  );
}
