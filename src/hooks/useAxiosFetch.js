import { useEffect, useState } from 'react'
import useLocation from '../api/useLocation';
import { api } from '../api/api'

const useAxiosFetch = (dataUrl = null) => {

  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [woeid, setWoeid] = useState(null);
  const { dataLocation } = useLocation();

  if (dataUrl === null) {
    dataUrl = dataLocation.city
  }

  useEffect(() => {

    let isMounted = true;
    const controller = new AbortController();


    const fetchLocation = async () => {
      setIsLoading(true);
      try {

        // Fetch location info to get woeid
        const woeidResponse = await api.get(`search/?query=${dataUrl.toLowerCase()}`, {
          signal: controller.signal
        })

        // Load woeid
        if (isMounted) {
          setWoeid(woeidResponse.data[0].woeid)
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

  }, [dataUrl, woeid])


  return { data, fetchError, isLoading }

}

export default useAxiosFetch
