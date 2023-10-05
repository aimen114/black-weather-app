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
    "clear-sky-day": "rgba(220, 155, 17, 1)",
    "clear-sky-night": "rgba(119, 171, 255)",
    "few-clouds-day": "rgba(193, 193, 193, 1)",
    "few-clouds-night": "rgba(135, 135, 135, 1)",
    "scattered-clouds-day": "rgba(193, 193, 193, 1)",
    "scattered-clouds-night": "rgba(135, 135, 135, 1)",
    "broken-clouds-day": "rgba(193, 193, 193, 1)",
    "broken-clouds-night": "rgba(135, 135, 135, 1)",
    "shower-rain-day": "rgba(201, 161, 199, 1)",
    "shower-rain-night": "rgba(166, 97, 163, 1)",
    "rain-day": "rgba(201, 161, 199, 1)",
    "rain-night": "rgba(166, 97, 163, 1)",
    "thunderstorm-day": "rgba(201, 161, 199, 1)",
    "thunderstorm-night": "rgba(166, 97, 163, 1)",
    "snow-day": "rgba(255, 255, 255, 1)",
    "snow-night": "rgba(233, 233, 233, 1)",
    "mist-day": "rgba(83, 203, 233, 1)",
    "mist-night": "rgba(61, 150, 172, 1)",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color={colormap[props.code]}
      size={props.size}
      animate={true}
    />
  );
}
