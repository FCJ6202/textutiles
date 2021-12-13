import { useState } from 'react'
import Alert from './Components/Alert';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Field from './Components/TextField';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [alert, setalert] = useState({
    message: null,
    type: null
  });

  const [mode, setmode] = useState("dark");

  const SetAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    })

    setTimeout(() => {
      SetAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "#170534";
      document.body.style.color = "white";
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#170534";
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="textutiles"
          about="About"
          home="Home"
          SetAlert={SetAlert}
          toggleMode={toggleMode}
        />
        <Alert message={alert.message} type={alert.type} />
        {/* <div className="container my-3">
        <Routes>
          <Route exact path="/" element={ */}
            <Field
            SetAlert={SetAlert}
            heading="Enter your text"
            />
          {/* }/>
          <Route exact path="/about" element={
            <About />
          }/>
        </Routes>
        </div>
      </Router> */}

    </>
  );
}

export default App;
