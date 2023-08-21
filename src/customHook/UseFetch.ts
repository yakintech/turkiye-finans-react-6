import { useEffect, useState } from "react";


const useFetch = (url: string) => {

    const [data, setdata] = useState<any>(null);
    const [loading, setloading] = useState<any>(true);
    const [error, seterror] = useState<any>(null);

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setdata(data);
                setloading(false);
            })
            .catch(err => {
                seterror(error);
                setloading(false);
            })

    }, [url])

    return [data, loading, error];

}

export default useFetch