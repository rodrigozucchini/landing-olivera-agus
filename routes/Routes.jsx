import React, {useState, useEffect} from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import SectionIncruises from '../src/incruises/sections/Section';
import './Router.css';
import { SectionC } from '../src/cumbre/sections/SectionC';

function AppRouter() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div className="App">
    {
      loading 
      ? 
        (<div className="loader">
          <BounceLoader color="#fc7609" size={90} loading={loading} />
        </div>
        )
      :
        (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<SectionC />}/>
        <Route path="/sharkteam" element={<SectionIncruises />}/>
        <Route path="/cumbre" element={<SectionC />}/>
      </Routes>
    </HashRouter>
              )
            }
          </div>
  );
}

export default AppRouter;