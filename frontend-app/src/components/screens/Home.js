import SearchBox from "../SearchBox";
import Text from "../Text";
import { useState,useEffect } from "react";
import axios from "axios";
import Display from "../Display";
import Error from "../Error";
import Footer from "../Footer";

const Home = ()=>{

  const API_KEY ="c88719ff17eb9c6644f0cf2ae8d9dffd";

  const [temp, setTemp] = useState(0);
  const [name, setName] = useState('');
  const [main, setMain] = useState('');
  const [humidity, setHumidity] = useState(0)
  const [isLoaded,setIsLoaded] = useState(false);
  const [err,setErr] = useState(false);
  const [isLoading,setIsLoading] = useState(false);



const getLocation = ()=>{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getInfo, getErr);
} else {
    alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
}
}

 const getInfo = (position)=>{
  var lat =  position.coords.latitude;
  var long =  position.coords.longitude;

  setIsLoading(true);
  axios.post(`http://localhost:3001/api/get_params/`,{
    lat, long
  })
  .then(res =>{

    setIsLoaded(true)
    setTemp(res.data.temp);
    setName(res.data.location);
    setHumidity(res.data.humidity)
    setMain(res.data.status)

    setIsLoading(false)

    // console.log(res);
   
  })
}

const getErr = (err)=>{
    console.log("Error: is: "+err)
    setErr(true)
}

const getTemp =(temp)=>{
    return temp;
} 

return(
    
  <div className="container">

    {isLoaded && (
        <div className="text-center">
          <Display temp={getTemp(temp)} name={name} humidity={humidity} main={main}/>
            <button className="btn btn-warning" onClick={()=>window.location.reload()}>Check Again</button>
        </div>
      )}

    <div  className="container">
    {!isLoaded && !err && (
        <>
        <Text/>
        <div className="text-center py-4">
          {!isLoading && (
            <button onClick={getLocation} className="btn btn-danger btn-lg">Get My Weather Info</button>
          )}

          {isLoading && (
            <button disabled className="btn btn-danger btn-lg">Loading Weather Info...</button>
          )}
        </div>
        </>
    )}

    {err && (
        <>
            <Error/>
        </>
    )}
      
   <Footer path={"about"} name="About"/>
    </div>
  </div>
)

}

export default Home;