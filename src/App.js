import React from "react";
import WeatherBlock from "/Users/hongzhenzhang/Desktop/CS50 Projects/weather-station/src/components/weatherBlock.jsx";
import { Row, Col } from "antd";
import DetailedWeatherBlock from "/Users/hongzhenzhang/Desktop/CS50 Projects/weather-station/src/components/detailedWeatherBlock";

class App extends React.Component {
  state = {
    isLoaded: false,
    weather: []
  };

  async componentDidMount() {
    const url = "https://api.weather.gov/gridpoints/BOX/55,71/forecast";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ weather: data.properties.periods, isLoaded: true });
  }

  renderCards = () => {
    const { weather } = this.state;
    let weatherCards = weather.map(day => (
      <Col span={6} offset={1}>
        <WeatherBlock
          key={day.number}
          title={day.shortForecast}
          content={day.detailedForecast}
          cover={
            <img
              alt="WeatherIcon"
              src={day.icon}
              style={{ width: 100, padding: 5, margin: "auto" }}
            />
          }
        />
      </Col>
    ));
    weatherCards.splice(0, 1);
    return weatherCards;
  };

  render() {
    const { weather, isLoaded } = this.state;
    const todayWeather = this.state.weather[0];
    if (!isLoaded) {
      return <div>LOADING...</div>;
    } else {
      return (
        <div>
          <Row justify="center" style={{ margin: "5%" }}>
            <h1 style={{ fontSize: "72px" }}>
              <strong>React Weather Channel</strong>
            </h1>
          </Row>
          <DetailedWeatherBlock
            time={todayWeather.name}
            temperature={todayWeather.temperature}
            temperatureUnit={todayWeather.temperatureUnit}
            windSpeed={todayWeather.windSpeed}
            windDirection={todayWeather.windDirection}
            shortForecast={todayWeather.shortForecast}
            detailedForecast={todayWeather.detailedForecast}
          />
          <Row span={20} justify="center">
            {this.renderCards()}
          </Row>
        </div>
      );
    }
  }
}

export default App;
