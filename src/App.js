import React from "react";
import WeatherBlock from "/Users/hongzhenzhang/Desktop/CS50 Projects/weather-station/src/components/weatherBlock.jsx";

class App extends React.Component {
  state = {
    isLoaded: false,
    weather: null
  };

  async componentDidMount() {
    const url = "https://api.weather.gov/gridpoints/BOX/55,71/forecast";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ weather: data.properties.periods[0], isLoaded: true });
    console.log(data.properties.periods[0]);
  }

  render() {
    const { weather, isLoaded } = this.state;

    if (!isLoaded) {
      return <div>LOADING...</div>;
    } else {
      return (
        <div>
          <h1>Hello there! Today's weather: </h1>
          <WeatherBlock
            title={weather.shortForecast}
            content={weather.detailedForecast}
            cover={
              <img
                alt="todayWeatherIcon"
                src={weather.icon}
                style={{ width: 100, padding: 5, margin: "auto" }}
              />
            }
          />
        </div>
      );
    }
  }
}

export default App;
