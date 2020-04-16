import React, { Component } from "react";
import { Card, Descriptions } from "antd";
import { Row, Col } from "antd";
import { Button, notification } from "antd";

class DetailedWeatherBlock extends Component {
  openNotification = () => {
    notification.open({
      message: "Warm clothes",
      description:
        "Make sure to wear a warm snow coat in the cold snowy weather!"
    });
  };

  render() {
    return (
      <div>
        <Row span={20} justify="center">
          <Col span={16} offset={1}>
            <Card
              title="Today's Weather"
              cover={
                <img
                  alt="TodayWeather"
                  src="https://www.iamexpat.de/sites/default/files/styles/article--full/public/snow-south-germany.jpg?itok=NqWtd_Rx"
                />
              }
              style={{ marginBottom: "10%" }}
            >
              <Descriptions title="The Quick Facts">
                <Descriptions.Item label="Time">
                  {this.props.time}
                </Descriptions.Item>
                <Descriptions.Item label="Temperature">
                  {this.props.temperature} {this.props.temperatureUnit}
                </Descriptions.Item>
                <Descriptions.Item label="Wind Speed and Direction">
                  {this.props.windSpeed} {this.props.windDirection}
                </Descriptions.Item>
                <Descriptions.Item label="Brief Forecast">
                  {this.props.shortForecast}
                </Descriptions.Item>
                <Descriptions.Item label="Detailed Forecast">
                  {this.props.detailedForecast}
                </Descriptions.Item>
              </Descriptions>
              <Row justify="center" style={{ margin: 10 }}>
                <Button type="primary" onClick={this.openNotification}>
                  What should I wear?
                </Button>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DetailedWeatherBlock;
