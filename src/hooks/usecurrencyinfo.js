import { useEffect,useState } from "react";

function usecurrencyinfo(currency){
    const [data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/<span class="math-inline">${currency}/pair/</span>${from}/${to}`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data;
}
export default usecurrencyinfo;
