import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useState, useEffect } from "react";
import axios  from "axios";
const MyContext  = createContext();
function App() {

  const [countryList,setCountryList] = useState([]);
  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  },[]);

  const getCountry=async(url)=>{
    const response = await axios.get(url);
      setCountryList(response.data.data)
      console.log(response.data.data)
    
  } 
  const values={

  }
  return (
    <BrowserRouter>
    <MyContext.Provider  value={values}>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
      </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};
