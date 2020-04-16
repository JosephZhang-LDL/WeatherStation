import React, { Component } from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import { Col } from "antd";

class WeatherBlock extends Component {
  render() {
    const { Meta } = Card;

    return (
      <div>
        <Card
          hoverable
          title={this.props.title}
          cover={this.props.cover}
          style={{ height: "300px", marginBottom: "10%" }}
        >
          {this.props.content}
        </Card>
      </div>
    );
  }
}

export default WeatherBlock;
