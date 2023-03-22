
import './App.css';
import Topbar from './components/Header/Topbar';
import TopNavbar from './components/Header/Navbar';
import Slider from './components/Header/Slider';
import ContainerBase from './components/Container/ContainerBase';
import SlasedContainerBase from './components/Slased/SlasedContainerBase';
import Productbase from './components/products/Productbase';


function App() {
  return (
    <div>
      <Topbar />
      <TopNavbar />
      {/* <Slider />
      <ContainerBase />
      <SlasedContainerBase /> */}
      <Productbase />
      
    </div>
  );
}

export default App;
