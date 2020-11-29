/* eslint-disable react/prop-types */
import React, { FunctionComponent } from "react";

interface MenuProps {
  title: string;
}

const MenuItem: FunctionComponent<MenuProps> = ({ title }) => (
  <div className="menu-item">
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Buy now</span>
    </div>
  </div>
);

export default MenuItem;
