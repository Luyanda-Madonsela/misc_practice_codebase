import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <div className="App">
      <Navigation name="Luyanda"/>

      {/* <!------------------------------ main body ----------------------------------> */}
      <div id="mainSection">

      <WelcomePage />

      </div>
      {/* <!---------------------------------------------------------------------------> */}
      
      <Footer />

    </div>
  );
}

export default App;
