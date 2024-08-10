import React, { useState, useEffect } from 'react';
import axios from 'axios';
interface WeatherProps {
    city: string;
}

interface WeatherData {
    main: {
        temp: number;
    };
    weather: {
        description: string;
    };
}

const Weather: React.FC<WeatherProps> = ({ city }) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const response = await axios.get("");
            setWeatherData(response.data);
        };
        fetchWeatherData();
    }, [city]);

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Weather in {city}</h1>
            <p>Temperature is: {weatherData.main.temp}°C</p>
            <p>Description of: {weatherData.weather.description}</p>
        </div>
    );
};

export default Weather;