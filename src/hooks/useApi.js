import React, {useEffect} from "react";
import yelpApi from "../api/yelpApi";

function useApi(){
    const [results, setResults] = React.useState([]);
    const [errorMsg,setErrorMsg] = React.useState(null);
    
    function apiCall(term) {
        yelpApi.get('/search', {
            params: {
                limit: 50,
                term:term,
                location: 'san jose'
            }
        }).then((response) => {
            setResults(response.data.businesses);
            console.log(response.data.businesses)
        }).catch((err) => {
            console.log(err)
            setErrorMsg("Something went wrong")
        })
    }
    useEffect(()=>{
        apiCall("pasta")
    },[])
    return [apiCall,results,errorMsg];
}

export default useApi;
