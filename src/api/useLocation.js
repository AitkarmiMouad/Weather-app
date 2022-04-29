import axios from 'axios'
import { useEffect, useState } from 'react'

const useLocation = () => {

  const [dataLocation, setData] = useState([]);
  const [ErrorLocation, setFetchError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchUserLocation = async () => {

      try {
        const response = await axios.get("https://ipinfo.io/json?token=86e633cb5aa109", {
          signal: controller.signal
        });

        if (isMounted) {
          setData(response.data);
          setFetchError(null);
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

  }, [])

  return { dataLocation, ErrorLocation }
}

export default useLocation