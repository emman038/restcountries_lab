import RESTCountry from "./RESTCountry";
import VisitedCountry from "./VisitedCountry";

const CountriesLists = ({RESTCountries, VisitedCountries}) => {
    return ( 
        <section>
            <RESTCountry />
            <VisitedCountry />
        </section>
     );
}
 
export default CountriesLists;