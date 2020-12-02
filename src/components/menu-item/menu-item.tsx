import React, { FC } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import "./menu-item.styles.scss";

interface IProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

const MenuItem: FC<IProps & RouteComponentProps> = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}: IProps & RouteComponentProps) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Buy now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
