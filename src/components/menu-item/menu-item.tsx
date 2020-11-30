import React, { FC } from "react";

import "./menu-item.styles.scss";

interface IProps {
  title: string;
  imageUrl: string;
  size?: string;
}

const MenuItem: FC<IProps> = ({ title, imageUrl, size }) => (
  <div
    style={{ backgroundImage: `url(${imageUrl})` }}
    className={`${size} menu-item`}
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Buy now</span>
    </div>
  </div>
);

export default MenuItem;
