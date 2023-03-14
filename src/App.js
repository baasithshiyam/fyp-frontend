import React ,{useState , useEffect} from 'react';
import Home from './pages/home';
import Demo from './pages/demo';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [data, setdata] = useState([{}])

  useEffect(() => {
    fetch("/welcome").then(
      res => res.json()
    ).then(
      data => {
        setdata(data)
        console.log(data)
      }
    )
    },[])

  return (
    <Router>
    <div>
          <Routes>
              <Route exact path='/' element={< Home />} />
              <Route path='/demo' element={< Demo />} />
              {/* <Route path='/about' element={Home} /> */}
          </Routes>


          <h1>Welcome</h1>
          {(typeof data.welcome === "undefined") ? (
            <p> Loading .....</p>
          ) : (
            data.welcome.map((welcome , i) =>(
              < p key={i}>{welcome}</p>
            ))
          )}

     </div>
    </ Router>
    
  );
}

export default App;
