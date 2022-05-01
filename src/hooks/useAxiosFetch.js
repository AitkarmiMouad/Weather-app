import { useEffect, useState, useContext } from 'react'
import useLocation from '../api/useLocation';
import { api } from '../api/api'
import { ContextApi } from '../context/ContextApi';

const useAxiosFetch = (dataUrl = null) => {

  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [woeid, setWoeid] = useState(null);
  const { dataLocation, ipInfo, setIpInfo } = useLocation();
  const { reset, setReset } = useContext(ContextApi)

  if (dataUrl === null && ipInfo) {
    dataUrl = dataLocation.city
  }
  if (dataUrl === null && !ipInfo) {
    dataUrl = dataLocation
  }

  if (reset !== true && reset !== false && reset !== undefined) {
    dataUrl = reset;
  }



  useEffect(() => {

    let isMounted = true;
    const controller = new AbortController();

    const fetchLocation = async () => {
      setIsLoading(true);
      setIpInfo()
      try {
        if (reset !== true && reset !== false && reset !== undefined)
          setIpInfo(true)
        // Fetch location info to get woeid
        if (ipInfo) {
          const woeidResponse = await api.get(`search/?query=${dataUrl.toLowerCase()}`, {
            signal: controller.signal
          })
          // Load woeid
          if (isMounted) {
            setWoeid(woeidResponse.data[0].woeid)
          }
        }
        else {
          const woeidResponse = await api.get(`search/?lattlong=${dataUrl}`, {
            signal: controller.signal
          })
          // Load woeid
          if (isMounted) {
            setWoeid(woeidResponse.data[0].woeid)
          }
        }

        // fetch location weather Data using woeid
        const response = await api.get(`/${woeid}/`, {
          signal: controller.signal
        })

        // Load location weather Data
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
        // setIpInfo(false)
      }
      catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setWoeid(null)
          setData([]);
        }
      }
      finally {
        isMounted && setIsLoading(false)
      }
    }

    fetchLocation()


    return () => {
      isMounted = false;
      // To cancel the request
      controller.abort();
    }

  }, [dataUrl, woeid, ipInfo, reset, setIpInfo])


  return { data, fetchError, isLoading, setReset }

}

export default useAxiosFetch
