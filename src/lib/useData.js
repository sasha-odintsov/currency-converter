import { useState, useEffect} from 'react';

function useData() {
    const [data, setData] = useState();
    const myHeaders = new Headers();
    myHeaders.append("apikey", "197HrUufyRt7cBxHEa7ftCcQTYSDPQ3f");
  
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    useEffect(() => {
        fetch("https://api.apilayer.com/fixer/latest", requestOptions)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log('error', error));
    }, [])
    return data;
}

export default useData;