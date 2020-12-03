import React, { FC } from "react";
import CollectionItem from "../collection-item/collection-item";

import "./collection-preview.styles.scss";

interface ICollectionPreviewProps {
  id: number;
  title: string;
  routeName: string;
  items: Array<any>;
 
}

const CollectionPreview = ({ title, items}:ICollectionPreviewProps) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...itemProps }) => (
          <CollectionItem id={id} {...itemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
