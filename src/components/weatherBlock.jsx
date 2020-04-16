import React, { Component } from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import { Row, Col } from "antd";

class WeatherBlock extends Component {
  render() {
    const { Meta } = Card;

    return (
      <div>
        <Row align="middle">
          <Col span={8} offset={1}>
            <Card hoverable title={this.props.title} cover={this.props.cover}>
              {this.props.content}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default WeatherBlock;
