import { useState, useEffect } from "react";
import CountriesLists from "../components/CountriesLists";

const RESTCountriesContainer = () => {

    const [RESTCountries, setRESTCountries] = useState(null);
    const [VisitedCountries, setVisitedCountries] = useState(null);

    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json();

        setRESTCountries(data);
    };

    useEffect(() => {
        loadCountries()
    }, []);

    return (
        <>
            <CountriesLists RESTCountries={RESTCountries} VisitedCountries={VisitedCountries} />
        </>
    );
}

export default RESTCountriesContainer;