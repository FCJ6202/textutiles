import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Field from './Components/TextField';

function App() {
  return (
    <>
      <Navbar 
         title = "textutiles"
         about = "About"
         home = "Home"
      />
      <Field 
        heading = "Enter your text"      
      />
      {/* <About/> */}

    </>
  );
}

export default App;
