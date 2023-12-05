import RESTCountry from "./RESTCountry";
import VisitedCountry from "./VisitedCountry";

const CountriesLists = ({ RESTCountries, VisitedCountries, handleButtonClick }) => {

    const handleRESTCountry = RESTCountries.map((country, index) => {
        return <li key={index}><RESTCountry country={country} handleButtonClick={handleButtonClick} /></li>
    });

    const handleVisitedCountry = VisitedCountries.map((country, index) => {
        return <li key={index}><VisitedCountry country={country} /></li>
    });

    const handleLineBreak = (VisitedCountries) => {
        if (VisitedCountries.length === 0) {
            return <hr />;
        }
    };

    return (
        <section>
            <div>
                <h2>All Available Countries</h2>
                <ul>
                    {handleRESTCountry}
                </ul>
            </div>
            <div>
                <h2>Visited Countries</h2>
                <ul>
                    {handleLineBreak(VisitedCountries)}
                    {VisitedCountries.length ? handleVisitedCountry : <p>You haven't visited any countries yet</p>}
                </ul>
            </div>
        </section>
    );
}

export default CountriesLists;