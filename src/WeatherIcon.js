import { React } from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "WIND",
    "mist-night": "WIND",
  };
  const colormap = {
    "clear-sky-day": "#dbdd6a",
    "clear-sky-night": "rgba(119, 171, 255)",
    "few-clouds-day": "#dbdd6a",
    "few-clouds-night": "rgba(119, 171, 255)",
    "scattered-clouds-day": "#dbdd6a",
    "scattered-clouds-night": "rgba(119, 171, 255)",
    "broken-clouds-day": "#dbdd6a",
    "broken-clouds-night": "rgba(119, 171, 255)",
    "shower-rain-day": "#dbdd6a",
    "shower-rain-night": "rgba(119, 171, 255)",
    "rain-day": "#dbdd6a",
    "rain-night": "rgba(119, 171, 255)",
    "thunderstorm-day": "#dbdd6a",
    "thunderstorm-night": "rgba(119, 171, 255)",
    "snow-day": "#dbdd6a",
    "snow-night": "rgba(119, 171, 255)",
    "mist-day": "#dbdd6a",
    "mist-night": "rgba(119, 171, 255)",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color={colormap[props.code]}
      size={200}
      animate={true}
    />
  );
}
