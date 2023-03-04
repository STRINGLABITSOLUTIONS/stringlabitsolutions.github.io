import {useState, useEffect} from 'react'

 const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abrotCont = new AbortController();
        fetch(url, { signal: abrotCont.signal })
          .then(res => {
            if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data for that resource');
            } 
            return res.json();
          })
          .then(data => {
            setIsPending(false);
            setData(data);
            setError(null);
          })
          .catch(err => {
            // auto catches network / connection error
            if (err.name === 'AbrotError'){
                console.log('fetch abroted');
            }else{
                setIsPending(false);
                setError(err.message);
            }
        });
        return () => abrotCont.abort();
    }, [url])

    return {data, isPending, error}
}

export default useFetch;