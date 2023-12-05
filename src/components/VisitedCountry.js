const VisitedCountry = ({country}) => {
    return ( 
        <>
            <hr />
            <p><strong>Official Name:</strong> {country.name.official} {country.flag}</p>
            <p><strong>Common Name:</strong> {country.name.common}</p>
        </>
     );
}
 
export default VisitedCountry;