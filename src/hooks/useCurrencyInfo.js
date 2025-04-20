import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/2fe1f0e38329f631836aed0b/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res["conversion_rates"]))
        .catch((err) => console.log(err))
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;