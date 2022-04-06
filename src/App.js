import './style.css';
import Header from './components/Header.js';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer.js';
import data from './components/data.js';

function App(props) {
  return (
    <div className="App">
        <Header/>
          <MainContent clients={data}/>
        <Footer/>
    </div>
  );
}

export default App;
