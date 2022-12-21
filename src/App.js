import './App.css';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Main2 from './components/main2/Main2';
import Main from './components/main3/Main';
import Main4 from './components/main4/Main4';
import Main5 from './components/main5/Main5';
import Main7 from './components/main6/Main7';
import Main8 from './components/main7/Main8';
// import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Banner />
      <Main />
      <Main2 />
      <Main4 />
      <Main5 />
      <Main7 />
      <Main8 />
      <Footer />
    </div>
  );
}

export default App;
