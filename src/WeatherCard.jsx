
export  const WeatherCard = ({ data }) => {
    // console.log("props data", data);
    const {current , location} = data;
    return (
        <div className="weather-cards">
            <div className="weather-card">
                <h1>Temperature</h1>
                <p>{current?.temp_c}°C</p>
            </div>
            <div className="weather-card">
                <h1>Humidity</h1>
                <p>{current?.humidity}%</p>
            </div>
            <div className="weather-card">
                <h1>Condition</h1>
                <p>{current?.condition?.text}</p>
            </div>
            <div className="weather-card"> 
                <h1>Wind Speed</h1>
                <p>{current?.wind_kph}kph</p>
            </div>
        </div>
    )
}