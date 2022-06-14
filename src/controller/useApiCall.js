import { useEffect, useState } from "react"

const useApiCall = async (xURL) => {
    // const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(() => {
        const url = xURL
        fetch(url).then((response) => response.json()).then((json) => {
            // setIsLoadingData(false);
            setData(json["results"])
            console.log(data);
          })
          .catch((error) => console.log(error));
    },[data])

    
}
export default useApiCall

