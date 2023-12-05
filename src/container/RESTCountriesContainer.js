import { useState, useEffect } from "react";
import CountriesLists from "../components/CountriesLists";

const RESTCountriesContainer = () => {

    const [RESTCountries, setRESTCountries] = useState(null);
    const [VisitedCountries, setVisitedCountries] = useState([]);

    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json();

        setRESTCountries(data);
    };

    useEffect(() => {
        loadCountries()
    }, []);

    const handleButtonClick = (newCountry) => {
        // Edit VisitedCountries
        const updatedVisitedCountries = [...VisitedCountries];
        updatedVisitedCountries.push(newCountry); 
        setVisitedCountries(updatedVisitedCountries);
    
        // Edit RESTCountries
        const updatedRESTCountries = RESTCountries.filter((country) => country !== newCountry);
        setRESTCountries(updatedRESTCountries);
    };
    

    return (
        <>
            {RESTCountries ? <CountriesLists RESTCountries={RESTCountries} VisitedCountries={VisitedCountries} handleButtonClick={handleButtonClick}/> : <p>Loading Countries...</p>}
        </>
    );
}

export default RESTCountriesContainer;