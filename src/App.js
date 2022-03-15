import logo from './logo.svg';
import './App.css';
import Stories from './components/Stories/Stories';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Stories></Stories>
    </div>
  );
}

export default App;
