
import './App.css';
import Carousel from './components/main/carousel';
import Cars from './components/main/cars';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Carousel/>
      <Cars/>
    </div>
  );
}

export default App;
