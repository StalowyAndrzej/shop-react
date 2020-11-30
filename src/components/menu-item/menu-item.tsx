import React, { FunctionComponent } from "react";

import "./menu-item.styles.scss";

interface IProps {
  title: string;
}

const MenuItem: FunctionComponent<IProps> = ({ title }) => (
  <div className="menu-item">
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Buy now</span>
    </div>
  </div>
);

export default MenuItem;
