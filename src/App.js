import './App.css';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'
import Thali from './Components/Thali';
import Thalicuisine from './Components/Thalicuisine';

function App() {
  return (
    <div className="App">
      <Navbar/>
<Carousel/>
{/* <Thali/> */}

<Thalicuisine/>
<Footer/>
      
    </div>
  );
}

export default App;
