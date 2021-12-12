import {useState} from 'react'
import Alert from './Components/Alert';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Field from './Components/TextField';

function App() {
  const [alert, setalert] = useState({
    message : null,
    type : null
  });

  const SetAlert = (message,type) => {
    setalert({
      message : message,
      type : type
    })

    setTimeout(() => {
      SetAlert(null);
    }, 1500);
  }
  return (
    <>
      <Navbar 
         title = "textutiles"
         about = "About"
         home = "Home"
      />
      <Alert message = {alert.message} type = {alert.type} />
      <Field
        SetAlert = {SetAlert}
        heading = "Enter your text"
      />
      {/* <About/> */}

    </>
  );
}

export default App;
