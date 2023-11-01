import React, { useState } from "react";
import Header from "./Components/header";
import "./App.css";
import BodyContent from "./Components/bodyContent";
import MainContent from './Components/mainContent';
import SignUp from './Components/signUp';
import About from './Components/about';
import Service from "./Components/service";






function App() {
  const [mainPage, setMainPage] = useState(0);
    
  return (
    <div className="body">
      <Header setMainPage={setMainPage} />
      {mainPage === 0 ?(<BodyContent setMainPage={setMainPage}/>): mainPage === 1 ?
       (<MainContent setMainPage={setMainPage} />): mainPage === 2 ? (<SignUp setMainPage={setMainPage} />)
       : mainPage === 3 ?(<About/>): mainPage === 4? (<Service />):  null}
    </div>
  );
}

export default App;

