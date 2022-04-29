import axios from 'axios'
import { useEffect, useState } from 'react'


const useLocation = () => {

  const [dataLocation, setData] = useState([]);
  const [ErrorLocation, setFetchError] = useState(null);
  const [ipInfo, setIpInfo] = useState(false);
  const [position, setPosition] = useState('');
  const [geoDenied, setGeoDenied] = useState(false);


  function getPosition(position) {
    setPosition(`${position.coords.latitude},${position.coords.longitude}`)
  }

  function geoError(error) {
    if (error.code === error.PERMISSION_DENIED) {
      setGeoDenied(true)
    }
  }

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchUserLocation = async () => {

      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(getPosition,geoError);
          if(!geoDenied){
            setData(position)
          }
          else {
            const response = await axios.get("https://ipinfo.io/json?token=86e633cb5aa109", {
              signal: controller.signal
            });
  
            if (isMounted) {
              setData(response.data);
              setFetchError(null);
              setIpInfo(true)
            }
          }
        }
        
      }
      catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      }

    }

    fetchUserLocation()

    return () => {
      isMounted = false;
      controller.abort();
    }

  }, [position,geoDenied])

  return { dataLocation, ErrorLocation, ipInfo }
}

export default useLocation