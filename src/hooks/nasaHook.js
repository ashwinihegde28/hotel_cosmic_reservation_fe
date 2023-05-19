import { useEffect, useState } from "react";
import axios from "axios";
const apiKey = "uvGbySDuSgpeMVphaEU2Nt6Pna9FiBGHIdQtMFTO"


export function useNasa() {

  const [nasaData, setNasaData] = useState({});
  
  const nasaApi = () => {
    // Adding a new invoice

    return axios({
      method: "GET",
      url: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
    })
      .then(({ data }) => {

        console.log(`data`, data.hdurl)
        setNasaData(data)
        
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    nasaApi()
  }, [])

  return nasaData ;
}