import { Flex, Typography } from "antd";
import React from "react";
import { PanelProps } from "../interfaces/Panel.interfaces";
import "../styles/Panel.css";

const Panel = (props: PanelProps) => {
  const { title } = props;

  return (
    <Flex align="center" justify="center" className="panel-container">
      <Typography.Title level={2}>{title}</Typography.Title>
    </Flex>
  );
};

export default Panel;
