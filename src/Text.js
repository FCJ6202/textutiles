import './App.css';
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

    </>
  );
}

export default App;
