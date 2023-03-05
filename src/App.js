import React ,{useState , useEffect} from 'react';
import AppBarView from './view/AppBarView';
import ProductHeroView from './view/ProductHeroView';
import AboutView from './view/AboutView';
import HowToUse from './view/HowToUse';
import ContactUs from './view/ContactUs';
import FooterView from './view/FooterView';

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
    <div>
      < AppBarView />
      < ProductHeroView />
      < AboutView />
      < HowToUse />
      < ContactUs />
      < FooterView />
      <h1>Welcome</h1>
          {(typeof data.welcome === "undefined") ? (
            <p> Loading .....</p>
          ) : (
            data.welcome.map((welcome , i) =>(
              < p key={i}>{welcome}</p>
            ))
          )}
    </div>
  );
}

export default App;
