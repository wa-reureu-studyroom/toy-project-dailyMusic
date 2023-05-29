import { useEffect, useState } from 'react';
import { WiCloud, WiDaySunny, WiRain, WiSnow } from 'react-icons/wi';
import styled from 'styled-components';
import Quotes from './Quotes';

const WeatherContainer = styled.div`
    padding:83px ;
    display: flex;
    /* background-color:; */
    /* align-items: center; */
`;

const Icon = styled.div`
    margin-top: 12px;
    font-size: 60px;
`;

const City = styled.p`
    margin-left: 10px;
    font-size: 18px;
`;

const Temperature = styled.p`
    margin-left: 20px;
    margin-top: -13px;
    font-size: 15px;
    
`;

const API_KEY = "76e0dc6fc7f77e50fa77bdb26076dbb1";

function Weather() {
    const [city, setCity] = useState("");
    const [temperature, setTemperature] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(null);

    useEffect(() => {
    const fetchWeather = async () => {
        try {
            const position = await getCurrentPosition();
            const { latitude, longitude } = position.coords;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            setCity(data.name);
            setTemperature(data.main.temp);
            setWeatherIcon(getWeatherIcon(data.weather[0].main));
        } catch (error) {
            alert("Can't find your location.");
        }
        };

        fetchWeather();
    }, []);

    const getCurrentPosition = () => {
        return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

const getWeatherIcon = (weather) => {
    switch (weather) {
        case 'Clouds':
        return <WiCloud />;
        case 'Sunny':
        return <WiDaySunny />;
        case 'Rain':
        return <WiRain />;
        case 'Snow':
        return <WiSnow />;
        default:
        return null;
    }
};


    return (
        <div id="weather">
        <WeatherContainer>
            <Icon>{weatherIcon}</Icon>
        <div>
            <City>{city}</City>
            <Temperature>{temperature} °C</Temperature>
        </div>
        </WeatherContainer>
        <Quotes />
        </div>
    );
    }

    export default Weather;
