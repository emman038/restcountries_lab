const RESTCountry = ({country, handleButtonClick}) => {

    const handleButton = ()=>{
        handleButtonClick(country)
    };

    return (
        <>
            <hr />
            <p><strong>Official Name:</strong> {country.name.official} {country.flag}</p>
            <p><strong>Common Name:</strong> {country.name.common}</p>
            <button onClick={handleButton}>Click to Visit</button>
        </>
    );
}

export default RESTCountry;